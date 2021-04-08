<?php

namespace Panneau;

use Panneau\Contracts\Panneau as PanneauContract;
use Panneau\Contracts\Router as RouterContract;
use Illuminate\Contracts\Routing\Registrar;

class Router implements RouterContract
{
    const PREFIX = 'panneau';

    protected $panneau;

    protected $registrar;

    public function __construct(PanneauContract $panneau, Registrar $registrar)
    {
        $this->panneau = $panneau;
        $this->registrar = $registrar;
    }

    public function boot()
    {
        $resourcesIds = $this->panneau
            ->resources()
            ->filter(function ($resource) {
                return is_null($resource->controller());
            })
            ->map(function ($resource) {
                return $resource->id();
            });
        if (!$resourcesIds->isEmpty()) {
            $this->registrar->pattern('resource', '(' . $resourcesIds->join('|') . ')');
        }
    }

    public function resources($options = [])
    {
        $middleware = $options['middleware'] ?? 'web';
        $controller = $options['controller'] ?? '\\App\Panneau\Http\Controllers\ResourceController';

        $resourcesWithController = $this->panneau->resources()->filter(function ($resource) {
            return !is_null($resource->controller());
        });

        foreach ($resourcesWithController as $resource) {
            $this->registrar
                ->resource($resource->id(), '\\' . $resource->controller())
                ->parameters([
                    $resource->id() => 'id',
                ])
                ->middleware($middleware)
                ->names(Router::PREFIX . '.resources.' . $resource->id());
            $this->registrar
                ->get($resource->id() . '/{id}/delete', '\\' . $resource->controller() . '@delete')
                ->middleware($middleware)
                ->name(Router::PREFIX . '.resources.' . $resource->id() . '.delete');
        }

        $this->registrar
            ->resource('{resource}', $controller)
            ->parameters([
                '{resource}' => 'id',
            ])
            ->middleware($middleware)
            ->names(Router::PREFIX . '.resources');

        $this->registrar
            ->get('{resource}/{id}/delete', $controller . '@delete')
            ->middleware($middleware)
            ->name(Router::PREFIX . '.resources.delete');
    }

    public function getRoutes()
    {
        return collect($this->registrar->getRoutes()->getRoutesByName())->filter(function ($route) {
            $name = $route->getName();
            return preg_match('/^' . preg_quote(Router::PREFIX, '/') . '\./', $name) === 1;
        });
    }

    protected function getRoutePath($route)
    {
        $name = $route->getName();
        $patterns = $this->registrar->getPatterns();
        $parameters = $route->parameterNames();

        preg_match_all('/\{(.*?)\}/', $route->getDomain() . $route->uri(), $matches);
        $optionalParameters = array_map(
            function ($m) {
                return trim($m, '?');
            },
            array_values(
                array_filter($matches[1], function ($m) {
                    return preg_match('/\?$/', $m) === 1;
                })
            )
        );

        $params = [];
        foreach ($parameters as $parameter) {
            $params[] = ':' . $parameter;
        }

        $path = route($name, $params, false);
        foreach ($parameters as $parameter) {
            if (in_array($parameter, $optionalParameters)) {
                $path = preg_replace('/(' . preg_quote(':' . $parameter) . ')\b/i', '$1?', $path);
            }
            if (isset($patterns[$parameter])) {
                $pattern = preg_replace('/^\(?(.*?)\)?$/', '$1', $patterns[$parameter]);
                $path = preg_replace(
                    '/(' . preg_quote(':' . $parameter) . ')(\?)?\b/i',
                    '$1(' . $pattern . ')$2',
                    $path
                );
            }
        }

        return $path;
    }

    public function toRoutesArray(): array
    {
        return $this->getRoutes()->mapWithKeys(function ($route) {
            $name = preg_replace(
                '/^' . preg_quote(Router::PREFIX, '/') . '\./',
                '',
                $route->getName()
            );
            return [
                $name => $this->getRoutePath($route),
            ];
        })->toArray();
    }
}
