<?php

namespace Folklore\Panneau\Support;

use Folklore\Panneau\Support\Resource;

class JsonSchemaResource extends Resource
{
    protected $jsonSchema;

    public function __construct($definition = null)
    {
        parent::__construct($definition);
        if (!is_null($definition)) {
            $this->jsonSchema = array_get($definition, 'jsonSchema', null);
        }
    }

    public function getForms()
    {
        return $this->getFormsFromSchema();
    }

    protected function getFormsFromSchema()
    {
        $form = $this->form;
        $fields = array_get($form, 'fields', []);
        if (empty($fields)) {
            $schema = app($this->jsonSchema);
            $properties = $schema->getProperties();
            foreach ($properties as $name => $prop) {
                $fieldArray = $prop->toFieldArray();
                array_set($fieldArray, 'name', $name);
                array_set($fieldArray, 'label', title_case($name));
                $fields[] = $fieldArray;
            }
            array_set($form, 'fields', $fields);
        }
        return $form;
    }
}
