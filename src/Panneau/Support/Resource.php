<?php

namespace Panneau\Support;

use Illuminate\Contracts\Container\Container;
use Illuminate\Contracts\Translation\Translator;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Str;
use Illuminate\Support\Collection;
use Panneau\Contracts\Resource as ResourceContract;
use Panneau\Contracts\Repository;
use Panneau\Contracts\ResourceItem;
use JsonSerializable;

abstract class Resource implements ResourceContract, Arrayable
{
    public static $repository;

    public static $controller;

    public static $jsonResource;

    public static $jsonCollection;

    protected $container;

    protected $translator;

    protected $repositoryInstance;

    public function __construct(Container $container, Translator $translator)
    {
        $this->container = $container;
        $this->translator = $translator;
    }

    public function id(): string
    {
        return Str::camel(preg_replace('/Resource$/', '', class_basename(get_class($this))));
    }

    public function label(): string
    {
        return preg_replace('/Resource$/', '', class_basename(get_class($this)));
    }

    abstract public function fields(): array;

    public function types(): ?Collection
    {
        return null;
    }

    public function repository(): Repository
    {
        if (!isset($this->repositoryInstance)) {
            $this->repositoryInstance = $this->container->make(static::$repository);
        }
        return $this->repositoryInstance;
    }

    public function controller(): ?string
    {
        return static::$controller;
    }

    public function components(): ?array
    {
        return null;
    }

    public function showsInNavbar(): bool
    {
        return true;
    }

    public function canCreate(): bool
    {
        return true;
    }

    public function indexIsPaginated(): bool
    {
        return true;
    }

    public function messages(): array
    {
        $id = $this->id();
        $singularLabel = Str::lower(Str::singular($this->label()));
        $pluralLabel = Str::lower(Str::plural($this->label()));
        $plural = $this->translator->has('panneau::resources.' . $id . '_plural')
            ? $this->translator->get('panneau::resources.' . $id . '_plural')
            : $pluralLabel;
        $singular = $this->translator->has('panneau::resources.' . $id . '_singular')
            ? $this->translator->get('panneau::resources.' . $id . '_singular')
            : $singularLabel;
        return [
            'plural' => $plural,
            'Plural' => $this->translator->has('panneau::resources.' . $id . '_Plural')
                ? $this->translator->get('panneau::resources.' . $id . '_Plural')
                : Str::title($plural),
            'singular' => $singularLabel,
            'Singular' => $this->translator->has('panneau::resources.' . $id . '_Singular')
                ? $this->translator->get('panneau::resources.' . $id . '_Singular')
                : Str::title($singularLabel),
            'a_singular' => $this->translator->has('panneau::resources.' . $id . '_a_singular')
                ? $this->translator->get('panneau::resources.' . $id . '_a_singular')
                : $this->translator->get('panneau::resources.a_singular', [
                    'resource' => $singular,
                ]),
            'A_singular' => $this->translator->has('panneau::resources.' . $id . '_A_singular')
                ? $this->translator->get('panneau::resources.' . $id . '_A_singular')
                : $this->translator->get('panneau::resources.A_singular', [
                    'resource' => $singular,
                ]),
            'the_singular' => $this->translator->has('panneau::resources.' . $id . '_the_singular')
                ? $this->translator->get('panneau::resources.' . $id . '_the_singular')
                : $this->translator->get('panneau::resources.the_singular', [
                    'resource' => $singular,
                ]),
            'The_singular' => $this->translator->has('panneau::resources.' . $id . '_The_singular')
                ? $this->translator->get('panneau::resources.' . $id . '_The_singular')
                : $this->translator->get('panneau::resources.The_singular', [
                    'resource' => $singular,
                ]),
        ];
    }

    public function newJsonResource(ResourceItem $resource): JsonSerializable
    {
        $resourceClass = static::$jsonResource;
        return new $resourceClass($resource);
    }

    public function newJsonCollection($resources): JsonSerializable
    {
        if (isset(static::$jsonCollection)) {
            $collectionClass = static::$jsonCollection;
            return new $collectionClass($resources);
        }
        $resourceClass = static::$jsonResource;
        return $resourceClass::collection($resources);
    }

    public function toArray()
    {
        $data = [
            'id' => $this->id(),
            'label' => $this->label(),
            'fields' => collect($this->fields())->toArray(),
            'messages' => $this->messages(),
        ];
        $types = $this->types();
        if (isset($types)) {
            $data['types'] = $types;
        }
        return $data;
    }

    public function jsonSerialize()
    {
        return $this->toArray();
    }
}
