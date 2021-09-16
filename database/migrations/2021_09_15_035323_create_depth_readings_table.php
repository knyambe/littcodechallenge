<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDepthReadingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('depth_readings', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('collar_position_id');
            $table->integer('depth');
            $table->integer('dip');
            $table->decimal('azimuth', 4, 1);
            $table->boolean('accurate');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('depth_readings');
    }
}
