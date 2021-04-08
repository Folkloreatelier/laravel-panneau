<?php

namespace Panneau\Contracts;

interface Router
{
    public function resources($options = []);

    public function toRoutesArray(): array;
}
