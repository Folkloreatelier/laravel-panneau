<?php

use Folklore\Panneau\Support\Schema;
use Folklore\Panneau\Support\SchemaNodesCollection;

/**
 * @coversDefaultClass Folklore\Panneau\Support\Schema
 */
class SchemaTest extends TestCase
{
    protected $schema;

    public function setUp()
    {
        parent::setUp();

        $this->schema = new Schema();
    }

    /**
     * Test getting properties
     *
     * @test
     * @covers ::setProperties
     * @covers ::getProperties
     *
     */
    public function testGetProperties()
    {
        $data = [
            'data' => [
                'type' => 'integer'
            ]
        ];
        $this->schema->setProperties($data);
        $returnedData = $this->schema->getProperties();
        $this->assertArrayHasKey('data', $returnedData);
        $this->assertInstanceOf(Schema::class, $returnedData['data']);
        $this->assertEquals($data['data']['type'], $returnedData['data']['type']);
    }

    /**
     * Test getting nodes
     *
     * @test
     * @covers ::getNodes
     *
     */
    public function testGetNodes()
    {
        $data = [
            'data' => [
                'type' => 'object',
                'properties' => [
                    'text' => [
                        'type' => 'string'
                    ],
                    'items' => [
                        'type' => 'array',
                        'items' => [
                            'type' => 'string'
                        ]
                    ]
                ]
            ]
        ];
        $this->schema->setProperties($data);
        $nodes = $this->schema->getNodes();

        $this->assertInstanceOf(SchemaNodesCollection::class, $nodes);

        $paths = [
            'data' => 'object',
            'data.text' => 'string',
            'data.items' => 'array',
            'data.items.*' => 'string',
        ];

        foreach ($nodes as $node) {
            $this->assertArrayHasKey($node->path, $paths);
            $this->assertEquals($paths[$node->path], $node->type);
        }

        $nodes = $this->schema->getNodes('data');

        $paths = [
            '' => 'object',
            'text' => 'string',
            'items' => 'array',
            'items.*' => 'string',
        ];

        foreach ($nodes as $node) {
            $this->assertArrayHasKey($node->path, $paths);
            $this->assertEquals($paths[$node->path], $node->type);
        }
    }

    /**
     * Test getting nodes
     *
     * @test
     * @covers ::getNodes
     *
     */
    public function testGetNodesFromData()
    {
        $properties = [
            'data' => [
                'type' => 'object',
                'properties' => [
                    'text' => [
                        'type' => 'string'
                    ],
                    'items' => [
                        'type' => 'array',
                        'items' => [
                            'type' => 'object',
                            'properties' => [
                                'name' => [
                                    'type' => 'string'
                                ],
                                'subitems' => [
                                    'type' => 'array',
                                    'items' => [
                                        'type' => 'string'
                                    ]
                                ]
                            ]
                        ]
                    ]
                ]
            ]
        ];
        $data = [
            'data' => [
                'text' => 'test',
                'items' => [
                    [
                        'name' => 'item 1',
                        'subitems' => ['subitem 1.1', 'subitem 1.2']
                    ],
                    [
                        'name' => 'item 2',
                        'subitems' => ['subitem 2.1']
                    ]
                ],
            ],
        ];
        $this->schema->setProperties($properties);
        $nodes = $this->schema->getNodesFromData($data);

        $this->assertInstanceOf(SchemaNodesCollection::class, $nodes);

        $paths = [
            'data' => 'object',
            'data.text' => 'string',
            'data.items' => 'array',
            'data.items.0' => 'object',
            'data.items.0.name' => 'string',
            'data.items.0.items' => 'array',
            'data.items.0.items.0' => 'string',
            'data.items.0.items.1' => 'string',
            'data.items.1' => 'object',
            'data.items.1.name' => 'string',
            'data.items.1.items' => 'array',
            'data.items.1.items.0' => 'string',
        ];

        foreach ($nodes as $node) {
            $this->assertArrayHasKey($node->path, $paths);
            $this->assertEquals($paths[$node->path], $node->type);
        }

        $nodes = $this->schema->getNodesFromData($data, 'data');

        $paths = [
            '' => 'object',
            'text' => 'string',
            'items' => 'array',
            'items.0' => 'object',
            'items.0.name' => 'string',
            'items.0.items' => 'array',
            'items.0.items.0' => 'string',
            'items.0.items.1' => 'string',
            'items.1' => 'object',
            'items.1.name' => 'string',
            'items.1.items' => 'array',
            'items.1.items.0' => 'string',
        ];

        foreach ($nodes as $node) {
            $this->assertArrayHasKey($node->path, $paths);
            $this->assertEquals($paths[$node->path], $node->type);
        }
    }
}
