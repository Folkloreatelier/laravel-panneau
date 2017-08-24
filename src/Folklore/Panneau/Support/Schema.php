<?php

namespace Folklore\Panneau\Support;

use Folklore\Panneau\Contracts\Schema as SchemaContract;
use ArrayAccess;
use JsonSerializable;
use Illuminate\Contracts\Support\Jsonable;
use Illuminate\Contracts\Support\Arrayable;

class Schema implements ArrayAccess, Arrayable, Jsonable, JsonSerializable, SchemaContract
{
    protected $name;
    protected $type;
    protected $properties;
    protected $required;
    protected $default;
    protected $items;
    protected $enum;
    protected $schemaAttributes = ['type', 'properties', 'required', 'default', 'items', 'enum'];
    protected $attributes;

    public function __construct($schema = [])
    {
        $this->setSchema($schema);
    }

    public function setSchema($schema)
    {
        foreach ($this->schemaAttributes as $attribute) {
            $this->{$attribute} = array_get($schema, $attribute);
        }
        $this->attributes = array_except($schema, $this->schemaAttributes);
    }

    public function getName()
    {
        $class = get_class($this);
        $defaultType = $class !== self::class ? class_basename($class) : $this->type;
        $defaultName = isset($this->name) ? $this->name : $defaultType;
        return method_exists($this, 'name') ? $this->name() : $defaultName;
    }

    public function getProperties()
    {
        $properties = isset($this->properties) ? $this->properties : [];
        if (method_exists($this, 'properties')) {
            $properties = array_merge($properties, $this->properties($properties));
        }

        $propertiesResolved = [];
        foreach ($properties as $name => $value) {
            if (is_string($value)) {
                $propertiesResolved[$name] = app($value);
            } elseif (is_array($value) && in_array(array_get($value, 'type'), ['array', 'object'])) {
                $property = app(SchemaContract::class);
                $property->setSchema($value);
                $propertiesResolved[$name] = $property;
            } else {
                $propertiesResolved[$name] = $value;
            }
        }

        return $propertiesResolved;
    }

    public function setProperties($value)
    {
        return $this->setSchemaAttribute('properties', $value);
    }

    public function getItems()
    {
        if (method_exists($this, 'items')) {
            $items = $this->items();
        } else {
            $items = isset($this->items) ? $this->items : [];
        }

        if (is_string($items)) {
            return app($items);
        } elseif (isset($items['type'])) {
            return $items;
        }

        $itemsResolved = [];
        foreach ($items as $name => $value) {
            $itemsResolved[$name] = is_string($value) ? app($value) : $value;
        }

        return $itemsResolved;
    }

    public function setItems($value)
    {
        return $this->setSchemaAttribute('items', $value);
    }

    public function getType()
    {
        return $this->getSchemaAttribute('type');
    }

    public function setType($value)
    {
        return $this->setSchemaAttribute('type', $value);
    }

    public function getDefault()
    {
        return $this->getSchemaAttribute('default');
    }

    public function setDefault($value)
    {
        return $this->setSchemaAttribute('default', $value);
    }

    public function getRequired()
    {
        return $this->getSchemaAttribute('required');
    }

    public function setRequired($value)
    {
        return $this->setSchemaAttribute('required', $value);
    }

    public function getEnum()
    {
        return $this->getSchemaAttribute('enum');
    }

    public function setEnum($value)
    {
        return $this->setSchemaAttribute('enum', $value);
    }

    public function getAttributes()
    {
        return $this->getSchemaAttribute('attributes');
    }

    public function setAttributes($value)
    {
        return $this->setSchemaAttribute('attributes', $value);
    }

    protected function getSchemaAttribute($key)
    {
        $value = isset($this->{$key}) ? $this->{$key} : null;
        if (method_exists($this, $key)) {
            $value = $this->{$key}($value);
        }

        return $value;
    }

    protected function setSchemaAttribute($key, $value)
    {
        $this->{$key} = $value;
    }

    public function getStructure($path = null)
    {
        $type = $this->getType();
        $structure = [];
        $properties = [];
        if ($type === 'object') {
            $properties = $this->getProperties();
        } elseif ($type === 'array') {
            $items = $this->getItems();
            if ($items instanceof SchemaContract || (is_array($items) && isset($items['type']))) {
                $properties = [
                    '*' => $items
                ];
            } else {
                $properties = $items;
            }
        }

        foreach ($properties as $name => $propertySchema) {
            $propertyPath = empty($path) ? $name : ($path.'.'.$name);
            if ($propertySchema instanceof SchemaContract) {
                $structure[$propertyPath] = [
                    'type' => $propertySchema->getName(),
                    'schema' => $propertySchema,
                ];
                $structure = array_merge($structure, $propertySchema->getStructure($propertyPath));
            } else {
                $structure[$propertyPath] = [
                    'type' => array_get($propertySchema, 'type'),
                ];
            }
        }

        return $structure;
    }

    public function toArray()
    {
        $type = $this->getType();
        $name = $this->getName();

        $schema = [
            'name' => $name,
        ];

        foreach ($this->schemaAttributes as $attribute) {
            if (in_array($attribute, ['properties', 'items'])) {
                $value = $this->{'get'.studly_case($attribute)}();
                if (isset($value)) {
                    $schema[$attribute] = $value;
                }
            }
        }

        if ($type === 'object') {
            $properties = $this->getProperties();
            $schema['properties'] = [];
            foreach ($properties as $name => $value) {
                $schema['properties'][$name] = $value instanceof Arrayable ? $value->toArray() : $value;
            }
        } elseif ($type === 'array') {
            $items = $this->getItems();
            $schema['items'] = $items instanceof Arrayable ? $items->toArray() : $items;
        }

        $attributes = $this->getAttributes();

        return array_merge($schema, $attributes);
    }

    /**
     * Convert the object into something JSON serializable.
     *
     * @return array
     */
    public function jsonSerialize()
    {
        return $this->toArray();
    }

    /**
     * Convert the Fluent instance to JSON.
     *
     * @param  int  $options
     * @return string
     */
    public function toJson($options = 0)
    {
        return json_encode($this->jsonSerialize(), $options);
    }

    /**
     * Determine if the given offset exists.
     *
     * @param  string  $offset
     * @return bool
     */
    public function offsetExists($offset)
    {
        return isset($this->{$offset});
    }

    /**
     * Get the value for a given offset.
     *
     * @param  string  $offset
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return $this->{$offset};
    }

    /**
     * Set the value at the given offset.
     *
     * @param  string  $offset
     * @param  mixed   $value
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        $this->{$offset} = $value;
    }

    /**
     * Unset the value at the given offset.
     *
     * @param  string  $offset
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->{$offset});
    }

    /**
     * Dynamically retrieve the value of an attribute.
     *
     * @param  string  $key
     * @return mixed
     */
    public function __get($key)
    {
        $data = $this->toArray();
        return array_get($data, $key);
    }

    /**
     * Dynamically set the value of an attribute.
     *
     * @param  string  $key
     * @param  mixed   $value
     * @return void
     */
    public function __set($key, $value)
    {
        $this->attributes[$key] = $value;
    }

    /**
     * Dynamically check if an attribute is set.
     *
     * @param  string  $key
     * @return bool
     */
    public function __isset($key)
    {
        return isset($this->attributes[$key]);
    }

    /**
     * Dynamically unset an attribute.
     *
     * @param  string  $key
     * @return void
     */
    public function __unset($key)
    {
        unset($this->attributes[$key]);
    }

    /**
     * Dynamically call schema attributes accessors
     *
     * @param  string  $key
     * @return void
     */
    public function __call($method, $parameters)
    {
        $accessorMethods = [];
        $mutatorsMethods = [];
        foreach ($this->schemaAttributes as $attribute) {
            $methodAttribute = studly_case($attribute);
            if ($method === 'get'.$methodAttribute) {
                return $this->getSchemaAttribute($attribute);
                break;
            } elseif ($method === 'set'.$methodAttribute) {
                return $this->setSchemaAttribute($attribute, $parameters[0]);
                break;
            }
        }
    }
}
