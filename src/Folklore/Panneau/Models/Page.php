<?php

namespace Folklore\Panneau\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;
use Folklore\EloquentJsonSchema\Support\HasJsonSchema;
use Folklore\EloquentJsonSchema\Contracts\HasJsonSchema as HasJsonSchemaContract;
use Folklore\Mediatheque\Support\Traits\HasMedias;
use Folklore\Panneau\Contracts\Page as PageContract;
use Folklore\Panneau\Contracts\Block as BlockContract;
use Folklore\Panneau\Schemas\Pages\Base as BaseSchema;

class Page extends Model implements
    PageContract,
    Sortable,
    HasJsonSchemaContract
{
    use SoftDeletes;
    use SortableTrait;
    use HasMedias;
    use HasJsonSchema;

    protected $table = 'pages';

    protected $guarded = [
        'id'
    ];

    protected $hidden = [
        'pivot',
        'blocks',
        'pictures',
    ];

    protected $fillable = [
        'type',
        'data',
    ];

    protected $casts = [
        'data' => 'json_schema:object',
        'order' => 'integer'
    ];

    protected $jsonSchemas = [];

    protected $jsonSchemasReducers = [
        \Folklore\Panneau\Reducers\BlocksReducer::class,
        \Folklore\Panneau\Reducers\PagesReducer::class,
        \Folklore\Panneau\Reducers\MediasReducer::class,
    ];

    protected $sortable = [
        'order_column_name' => 'order',
        'sort_when_creating' => false,
    ];

    /**
     * Get JSON Schemas
     * @return array Map of the json schemas and columns
     */
    public function getJsonSchemas()
    {
        $schema = app('panneau')->page($this->type);
        return array_merge([
            'data' => !is_null($schema) ? $schema : BaseSchema::class,
        ], $this->jsonSchemas);
    }

    /**
     * Scope the model by slug
     * @param  \Illuminate\Database\Eloquent\Builder $query The query builder
     * @param  string $slug The slug
     * @param  string|null $locale The locale of the slug
     * @return \Illuminate\Database\Eloquent\Builder The query builder
     */
    public function scopeWhereSlug($query, $slug, $locale = null)
    {
        if (is_null($locale)) {
            $locale = app()->getLocale();
        }
        return $query->where('slug_'.$locale, $slug);
    }

    /**
     * Scope the model by handle
     * @param \Illuminate\Database\Eloquent\Builder $query The query builder
     * @param string $handle The handle
     * @return \Illuminate\Database\Eloquent\Builder The query builder
     */
    public function scopeWhereHandle($query, $handle)
    {
        return $query->where('handle', $handle);
    }

    /**
     * Relationships
     */
    public function pages()
    {
        $class = get_class(resolve(PageContract::class));
        $table = config('panneau.table_prefix').'pages_pages_pivot';
        return $this->belongsToMany($class, $table, 'parent_page_id', 'page_id')
            ->withPivot('handle', 'order')
            ->withTimestamps();
    }

    public function parents()
    {
        $class = get_class(resolve(PageContract::class));
        $table = config('panneau.table_prefix').'pages_pages_pivot';
        return $this->belongsToMany($class, $table, 'page_id', 'parent_page_id')
            ->withPivot('handle', 'order')
            ->withTimestamps();
    }

    public function blocks()
    {
        $class = get_class(resolve(BlockContract::class));
        $table = config('panneau.table_prefix').'pages_blocks_pivot';
        return $this->belongsToMany($class, $table, 'page_id', 'block_id')
            ->withPivot('handle', 'order')
            ->withTimestamps();
    }
}
