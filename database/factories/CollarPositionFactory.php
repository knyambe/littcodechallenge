<?php

namespace Database\Factories;

use App\Models\CollarPosition;
use Illuminate\Database\Eloquent\Factories\Factory;

class CollarPositionFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = CollarPosition::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $faker = \Faker\Factory::create();
        return [
            'latitude' => $faker->latitude(),
            'longitude' => $faker->longitude(),
            'dip' => $faker->randomNumber(3),
            'azimuth' => $faker->randomFloat(1, -90, 90)
        ];
    }
}
