<?php

namespace Folklore\Panneau\Models;

use Lang;

use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;
use Folklore\Panneau\Support\Interfaces\HasFieldsSchema as HasFieldsSchemaInterface;
use Folklore\Panneau\Support\Traits\HasFieldsSchema;
use Folklore\Panneau\Models\Observers\HasFieldsSchemaObserver;
use Folklore\Panneau\Models\Block;
use \Exception;

class Page extends Model implements
    Sortable,
    HasFieldsSchemaInterface
{
    use SoftDeletes;
    use SortableTrait;
    use HasFieldsSchema;

    protected $table = 'pages';

    protected $sortable = [
        'order_column_name' => 'order',
        'sort_when_creating' => false,
    ];

    protected $baseSchema = [
        'data' => [
            'title' => 'Page',
            'type' => 'object',
            'title' => 'Page',
            'properties' => [
                'parent' => [
                    'type' => 'integer',
                    'title' => 'Parent',
                    'required' => false,
                ],
                'type' => [
                    'type' => 'string',
                    'title' => 'Layout',
                    'enum' => ['home', 'hub', 'text', 'info', 'gallery', 'large', 'media'],
                ],
                'title' => [
                    'type' => 'string',
                    'title' => 'Title',
                    'required' => true,
                ],
                'slug' => [
                    'type' => 'string',
                    'title' => 'Slug',
                ],
                'subtitle' => [
                    'type' => 'string',
                    'title' => 'Subtitle',
                ],
                'description' => [
                    'type' => 'string',
                    'title' => 'Description',
                ],
                'icon' => [
                    'type' => 'string',
                    'title' => 'Icon',
                    'enum' => ['characters', 'diy', 'film', 'home', 'news', 'posters', 'quotes', 'resources', 'useful', 'videos'],
                ],
                'color' => [
                    'type' => 'string',
                    'title' => 'Color',
                    'default' => 'red',
                    'enum' => ['red', 'blue', 'green'],
                ],
                'order' => [
                    'type' => 'integer',
                    'minimum' => 0,
                    'title' => 'Order',
                ],
                'blocks' => [
                    'type' => 'array',
                    'title' => 'Blocks',
                    'items' => [
                        'type' => 'string'
                    ],
                ],
            ]
        ]
    ];

    protected $typeSchemas = [
        'home' => [
            // Stored as an object directly on the model, add further validation if needed
            'properties' => [
                'slideshow' => [
                    'type' => 'array',
                    'title' => 'Slideshow',
                    'items' => [
                        'type' => 'string'
                    ],
                    'uniqueItems' => true
                ],
            ],
        ],
        'hub' => [
            'properties' => [
                'custom_hub' => [
                    'type' => 'string',
                    'title' => 'Custom hub prop to test comp (share)',
                ],
            ],
        ],
        'text' => [
            'properties' => [
            ],
        ],
        'info' => [
            'properties' => [
            ],
        ],
        'gallery' => [
            'properties' => [
            ],
        ],
        'large' => [
            'properties' => [
            ],
        ],

    ];

    protected $hidden = [
        'data',
        'parent_id',
        'order',
        'deleted_at',
        'pivot',
        // 'children',
    ];

    protected $casts = [
        'data' => 'object',
        'slug' => 'string',
        'parent_id' => 'integer',
        'order' => 'integer'
    ];

    protected $guarded = [
        'id'
    ];

    protected $jsonSchemasAppends = [
        'parent' => 'data.parent',
        'title' => 'data.title',
        'layout' => 'data.layout',
        'slug' => 'data.slug',
        'subtitle' => 'data.subtitle',
        'description' => 'data.description',
        'icon' => 'data.icon',
        'color' => 'data.color'
    ];

    public static function boot()
    {
        static::observe(HasFieldsSchemaObserver::class);

        static::saved(function ($page) {
            if (!empty($page->data) && !empty($page->data->blocks)) {
                $blocks = $page->data->blocks;
                if (!is_array($blocks)) {
                    $blocks = [$blocks];
                }
                // Manually detach all then attach one by one instead of using sync(),
                // which does not allow for duplicate IDs.
                // @see https://laracasts.com/discuss/channels/eloquent/belongstomany-and-wanted-duplicates
                $page->blocks()->detach();
                foreach ($blocks as $key => $item) {
                    $page->blocks()->attach($item, ['order' => $key]);
                }
            }
        });

        parent::boot();
    }

    protected function getSchemasForValidation()
    {
        $def = $this->baseSchema;

        if (empty($this->type)) {
            return $def;
        }
        if (!isset($this->typeSchemas[$this->type])) {
            throw new Exception('Unknown page type "'.$this->type.'"');
        }

        $def['data']['properties'] = array_merge($def['data']['properties'], $this->typeSchemas[$this->type]['properties']);
        return $def;
    }

    protected function getSchemasAppends()
    {
        $appends = [];
        $schemas = $this->getSchemasForValidation();
        foreach ($schemas as $field => $schema) {
            foreach ($schema['properties'] as $prop => $value) {
                $appends[$prop] = $field.'.'.$prop;
            }
        }
        return $appends;
    }

    /**
     * Get the children pages of this one (recursive).
     */
    public function children()
    {
        return $this->hasMany(self::class, 'parent_id');
    }

    /**
     * Get the page parent to this one.
     */
    public function parent()
    {
        return $this->belongsTo(self::class);
    }

    public function blocks()
    {
        return $this->belongsToMany(Block::class, 'pages_blocks_pivot', 'page_id', 'block_id');
    }
}
