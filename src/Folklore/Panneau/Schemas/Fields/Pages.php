<?php

namespace Folklore\Panneau\Schemas\Fields;

use Folklore\Panneau\Support\Schema;

class Pages extends Schema
{
    protected function type()
    {
        return 'array';
    }

    protected function items()
    {
        return \Folklore\Panneau\Schemas\Fields\Page::class;
    }
}
