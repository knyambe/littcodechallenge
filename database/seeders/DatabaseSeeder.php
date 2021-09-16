<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\DrillHole;
use \App\Models\CollarPosition;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        DrillHole::factory(3)
        ->has(
            CollarPosition::factory(100)
            ->hasReadings(8)
            , 'surveys')
        ->create();
    }
}
