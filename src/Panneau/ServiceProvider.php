<?php

namespace Panneau;

use Illuminate\Support\ServiceProvider as BaseServiceProvider;
use Illuminate\Contracts\View\Factory as ViewFactory;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Routing\UrlGenerator;
use Panneau\Support\LocalizedField;

class ServiceProvider extends BaseServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->registerPanneau();

        $this->registerRouter();

        $this->mergeConfigFrom(__DIR__ . '/../config/panneau.php', 'panneau');
    }

    protected function registerPanneau()
    {
        $this->app->singleton('panneau', function () {
            return new \Panneau\Panneau($this->app, $this->app['events']);
        });
        $this->app->alias('panneau', \Panneau\Contracts\Panneau::class);
    }

    protected function registerRouter()
    {
        $this->app->singleton('panneau.router', function () {
            $panneau = $this->app['panneau'];
            $router = new \Panneau\Router($panneau, $this->app['router']);
            $panneau->booted(function () use ($router) {
                $router->boot();
            });
            return $router;
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->bootPublishes();

        $this->bootMacros();

        $this->bootViews();

        LocalizedField::setLocalesResolver(function () {
            return config('panneau.locales');
        });

        $this->app['panneau']->boot();
    }

    protected function bootPublishes()
    {
        $this->loadRoutesFrom(__DIR__ . '/../routes.php');

        $this->loadViewsFrom(__DIR__ . '/../views', 'panneau');

        $this->loadTranslationsFrom(__DIR__ . '/../lang', 'panneau');

        $this->publishes([
            __DIR__ . '/../config/panneau.php' => config_path('panneau.php'),
        ]);

        $this->publishes([
            __DIR__ . '/../views' => resource_path('views/vendor/panneau'),
        ]);

        $this->publishes([
            __DIR__ . '/../lang' => resource_path('lang/vendor/panneau'),
        ]);
    }

    protected function bootMacros()
    {
        $app = $this->app;

        $routeIsPanneau = function ($route) {
            if (is_null($route)) {
                return false;
            }
            $name = $route->getName();
            return !empty($name) && preg_match('/^panneau\./', $name) === 1;
        };

        Route::macro('isPanneau', function () use ($routeIsPanneau) {
            return $routeIsPanneau($this);
        });

        Request::macro('isPanneau', function () use ($routeIsPanneau) {
            return $routeIsPanneau($this->route());
        });

        Request::macro('isInPanneau', function () {
            $user = $this->user();
            return $this->isPanneau() &&
                !is_null($user) &&
                $user->can('view', \Panneau\Panneau::class);
        });

        UrlGenerator::macro('resourceRoute', function ($resourceId, $route, ...$params) use ($app) {
            $resource = $app['panneau']->resource($resourceId);
            $controller = $resource->controller();
            $routePrefix =
                'panneau.resources' . (!is_null($controller) ? '.' . $resource->id() : '');
            return $this->route($routePrefix . '.' . $route, ...$params);
        });

        $this->app['panneau']->serving(function () {
            Route::macro('resource', function () {
                $resource = $this->parameter('resource');
                if (!is_null($resource)) {
                    return is_string($resource) ? app('panneau')->resource($resource) : $resource;
                }
                $routeName = $this->getName();
                return preg_match(
                    '/^panneau\.resources\.([^\.]+)\.[^\.]+$/',
                    $routeName,
                    $matches
                ) === 1
                    ? app('panneau')->resource($matches[1])
                    : null;
            });

            Request::macro('resource', function () {
                return $this->route()->resource();
            });
        });
    }

    protected function bootViews()
    {
        $view = $this->app[ViewFactory::class];

        $view->share('isPanneau', false);
        $this->app['panneau']->serving(function () use ($view) {
            $view->share('isPanneau', true);
        });
    }
}
