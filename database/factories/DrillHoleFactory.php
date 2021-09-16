<?php

namespace Database\Factories;

use App\Models\DrillHole;
use Illuminate\Database\Eloquent\Factories\Factory;

class DrillHoleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = DrillHole::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $faker = \Faker\Factory::create();
        return [
            'name' => $faker->words(2, true)
        ];
    }
}
