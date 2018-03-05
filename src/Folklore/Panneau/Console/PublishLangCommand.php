<?php

namespace Folklore\Panneau\Console;

use Illuminate\Console\Command;

class PublishLangCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'panneau:lang';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Publish translations';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->call('vendor:publish', [
            '--provider' => \Folklore\Panneau\PanneauServiceProvider::class,
            '--tag' => 'lang',
            '--force' => true
        ]);
    }
}
