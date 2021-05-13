<?php

namespace Panneau\Http\Controllers;

use Illuminate\Http\Request;
use Panneau\Http\Requests\ResourceStoreRequest;
use Panneau\Http\Requests\ResourceUpdateRequest;
use Panneau\Contracts\Resource;
use Illuminate\Container\Container;
use Illuminate\Routing\Contracts\ControllerDispatcher;

class ResourceController extends Controller
{
    protected $defaultPageCount = 10;

    protected $container;

    protected $dispatcher;

    public function __construct(Container $container, ControllerDispatcher $dispatcher)
    {
        $this->container = $container;
        $this->dispatcher = $dispatcher;
    }

    protected function getResourceFromRequest(Request $request)
    {
        return $request->resource();
    }

    protected function getStoreDataFromRequest(Request $request)
    {
        return $request->except(['_token']);
    }

    protected function getUpdateDataFromRequest(Request $request)
    {
        return $request->except(['id', '_token']);
    }

    protected function getIndexQueryFromRequest(Request $request, Resource $resource)
    {
        return $request->except(['page', 'count']);
    }

    protected function getPageFromRequest(Request $request, Resource $resource)
    {
        return $request->input('page', $resource->indexIsPaginated() ? 1 : null);
    }

    protected function getPageCountFromRequest(Request $request, Resource $resource)
    {
        return $request->input(
            'count',
            $resource->indexIsPaginated() ? $this->defaultPageCount : null
        );
    }

    protected function resourceHasController(Resource $resource)
    {
        return !is_null($resource->controller());
    }

    protected function dispatchRequestToResourceController(
        Request $request,
        Resource $resource,
        $method
    ) {
        return $this->dispatcher->dispatch(
            $request->route(),
            $this->container->make($resource->controller()),
            $method
        );
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $resource = $this->getResourceFromRequest($request);
        if ($this->resourceHasController($resource)) {
            return $this->dispatchRequestToResourceController($resource, $request, 'index');
        }
        $repository = $resource->repository();
        if ($request->wantsJson()) {
            $query = $this->getIndexQueryFromRequest($request, $resource);
            $page = $this->getPageFromRequest($request, $resource);
            $count = $this->getPageCountFromRequest($request, $resource);
            $items = $repository->get($query, $page, $count);
            return $resource->newJsonCollection($items);
        }
        return view('panneau::app');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $resource = $this->getResourceFromRequest($request);
        if ($this->resourceHasController($resource)) {
            return $this->dispatchRequestToResourceController($resource, $request, 'create');
        }
        return view('panneau::app');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ResourceStoreRequest $request)
    {
        $resource = $this->getResourceFromRequest($request);
        if ($this->resourceHasController($resource)) {
            return $this->dispatchRequestToResourceController($resource, $request, 'store');
        }
        $repository = $resource->repository();
        $data = $this->getStoreDataFromRequest($request);
        $item = $repository->create($data);
        return $resource->newJsonResource($item);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        $resource = $this->getResourceFromRequest($request);
        if ($this->resourceHasController($resource)) {
            return $this->dispatchRequestToResourceController($resource, $request, 'show');
        }
        $id = $request->route('id');
        $repository = $resource->repository();
        $item = $repository->findById($id);
        if (is_null($item)) {
            return abort(404);
        }
        return $request->wantsJson() ? $resource->newJsonResource($item) : view('panneau::app');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        $resource = $this->getResourceFromRequest($request);
        if ($this->resourceHasController($resource)) {
            return $this->dispatchRequestToResourceController($resource, $request, 'edit');
        }
        return $this->show($request);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(ResourceUpdateRequest $request)
    {
        $resource = $this->getResourceFromRequest($request);
        if ($this->resourceHasController($resource)) {
            return $this->dispatchRequestToResourceController($resource, $request, 'update');
        }
        $id = $request->route('id');
        $repository = $resource->repository();
        $item = $repository->findById($id);
        if (is_null($item)) {
            return abort(404);
        }
        $data = $this->getUpdateDataFromRequest($request);
        $item = $repository->update($item->id(), $data);
        return $resource->newJsonResource($item);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request)
    {
        $resource = $this->getResourceFromRequest($request);
        if ($this->resourceHasController($resource)) {
            return $this->dispatchRequestToResourceController($resource, $request, 'delete');
        }
        return $this->show($request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $resource = $this->getResourceFromRequest($request);
        if ($this->resourceHasController($resource)) {
            return $this->dispatchRequestToResourceController($resource, $request, 'destroy');
        }
        $id = $request->route('id');
        $repository = $resource->repository();
        $item = $repository->findById($id);
        if (is_null($item)) {
            return abort(404);
        }
        $success = $repository->destroy($id);
        return [
            'success' => $success,
        ];
    }
}
