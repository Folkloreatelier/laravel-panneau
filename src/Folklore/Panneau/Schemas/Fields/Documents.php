<?php

namespace Folklore\Panneau\Schemas\Fields;

use Folklore\Panneau\Support\JsonSchemaField;

class Documents extends JsonSchemaField
{
    protected function type()
    {
        return 'array';
    }

    protected function items()
    {
        return \Folklore\Panneau\Schemas\Fields\Document::class;
    }
}
