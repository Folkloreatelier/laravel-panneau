<?php

namespace Folklore\Panneau\Schemas\Fields;

use Folklore\Panneau\Support\JsonSchemaField;

class Document extends JsonSchemaField
{
    protected function properties()
    {
        return [
            'id' => [
                'type' => 'integer'
            ],
        ];
    }
}
