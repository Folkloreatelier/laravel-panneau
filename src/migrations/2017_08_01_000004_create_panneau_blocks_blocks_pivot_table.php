<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

class CreatePanneauBlocksBlocksPivotTable extends PanneauMigration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(config('panneau.table_prefix').'blocks_blocks_pivot', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('parent_block_id')->unsigned();
            $table->integer('block_id')->unsigned();
            $table->string('handle')->nullable();
            $table->integer('order')->default(0);
            $table->timestamps();

            $table->index('parent_block_id');
            $table->index('block_id');
            $table->index('order');
            $table->index('handle');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(config('panneau.table_prefix').'blocks_blocks_pivot');
    }
}
