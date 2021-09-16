<?php

namespace Database\Factories;

use App\Models\DepthReading;
use Illuminate\Database\Eloquent\Factories\Factory;
use App\Services\DepthReadingCalculationService;

class DepthReadingFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DepthReading::class;


    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $faker = \Faker\Factory::create();
        return [
            'depth' => $faker->randomNumber(4),
            'dip' => $faker->numberBetween(20, 26),
            'azimuth' => $faker->randomFloat(1, -5, 5),
            'accurate' => 0
        ];
    }

    public function configure()
    {
        $calculator = new DepthReadingCalculationService();
        return $this->afterCreating(function (DepthReading $reading) use($calculator){
            $calculator->CalculateAccuracyForReading($reading);
        });
    }
}
