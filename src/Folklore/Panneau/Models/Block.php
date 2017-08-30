<?php

namespace Folklore\Panneau\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Folklore\Panneau\Support\Interfaces\HasFieldsSchema as HasFieldsSchemaInterface;
use Folklore\Mediatheque\Support\Traits\HasMedias;
use Folklore\Panneau\Support\Traits\HasFieldsSchema;
use Folklore\Panneau\Support\Traits\HasRelationsFields;
use Folklore\Panneau\Support\Traits\HasMediasFields;
use Folklore\Panneau\Support\Traits\HasPagesFields;
use Folklore\Panneau\Support\Traits\HasBlocksFields;
use Folklore\Panneau\Contracts\Page as PageContract;
use Folklore\Panneau\Contracts\Block as BlockContract;

class Block extends Model implements
    HasFieldsSchemaInterface
{
    use SoftDeletes;
    use HasMedias;
    use HasFieldsSchema;
    use HasRelationsFields;
    use HasMediasFields;
    use HasPagesFields;
    use HasBlocksFields;

    protected $table = 'blocks';

    protected $sortable = [
        'order_column_name' => 'order',
        'sort_when_creating' => false,
    ];

    protected $casts = [
        'data' => 'object',
        'type' => 'string',
    ];

    protected $guarded = [
        'id'
    ];

    protected $fillable = [
        'type',
        'data',
    ];

    public function blocks()
    {
        $class = get_class(app(BlockContract::class));
        $table = config('panneau.table_prefix').'blocks_blocks_pivot';
        return $this->belongsToMany($class, $table, 'parent_block_id', 'block_id')
            ->withPivot('handle', 'order')
            ->withTimestamps();
    }

    public function pages()
    {
        $class = get_class(app(PageContract::class));
        $table = config('panneau.table_prefix').'pages_blocks_pivot';
        return $this->belongsToMany($class, $table, 'block_id', 'page_id')
            ->withPivot('handle', 'order')
            ->withTimestamps();
    }
}
