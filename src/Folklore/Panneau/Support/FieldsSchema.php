<?php

namespace Folklore\Panneau\Support;

use Folklore\Panneau\Contracts\FieldsSchema as FieldsSchemaContract;
use Illuminate\Contracts\Support\Arrayable;

class FieldsSchema extends Schema implements FieldsSchemaContract
{
    protected $fields = [];

    public function __construct($schema = [])
    {
        parent::__construct($schema);
        $this->fields = array_get($schema, 'fields', []);
    }

    public function getFields()
    {
        $fields = isset($this->fields) ? $this->fields : [];
        if (method_exists($this, 'fields')) {
            $fields = array_merge($fields, $this->fields($fields));
        }

        return $fields;
    }

    public function getFieldsNames()
    {
        $names = [];
        $fields = $this->getFields();
        foreach ($fields as $name => $schema) {
            $names[] = is_numeric($name) ? $schema : $name;
        }
        return $names;
    }

    public function setFields($fields)
    {
        $this->fields = $fields;
    }

    public function addField($name, $schema = null)
    {
        if (is_null($schema)) {
            $this->fields[] = $name;
        } else {
            $this->fields[$name] = $schema;
        }
    }

    public function getSchemaForField($name)
    {
        $method = 'get'.studly_case($name).'Schema';
        if (method_exists($this, $method)) {
            $schema = $this->{$method}();
        } else {
            $fields = $this->getFields();
            $schema = array_get($fields, $name, []);
        }

        return is_string($schema) ? app($schema) : $schema;
    }

    public function getProperties()
    {
        $properties = parent::getProperties();
        $fields = $this->getFields();
        foreach ($fields as $name => $fieldSchema) {
            if (is_numeric($name)) {
                $name = $fieldSchema;
            }
            array_set($properties, $name, $this->getSchemaForField($name));
        }
        return $properties;
    }
}
