<?php

namespace Folklore\Panneau\Support\Traits;

trait HasBlocksFields
{
    protected function prepareBlocksField($path, $value, $field)
    {
        return $this->prepareRelationsField('blocks', $path, $value, $field);
    }

    protected function prepareBlockField($path, $value, $field)
    {
        return $this->prepareRelationField('blocks', $path, $value, $field);
    }

    protected function saveBlocksField($path, $value, $originalValue, $field)
    {
        return $this->saveRelationsField('blocks', $path, $value, $originalValue, $field);
    }

    protected function saveBlockField($path, $value, $originalValue, $field)
    {
        return $this->saveRelationField('blocks', $path, $value, $originalValue, $field);
    }

    protected function getBlocksField($path, $value, $fieldValue, $field)
    {
        return $this->getRelationsField('blocks', $path, $value, $fieldValue, $field);
    }

    protected function getBlockField($path, $value, $fieldValue, $field)
    {
        return $this->getRelationField('blocks', $path, $value, $fieldValue, $field);
    }

    protected function shouldUpdateBlocksRelationItem($relation, $id, $value)
    {
        return true;
    }
}
