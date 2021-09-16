<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\DepthReadingCalculationService;

class DepthReadingCalculationServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind('App\Services\DepthReadingCalculationService', function ($app) {
            return new DepthReadingCalculationService();
        });
    }
}
