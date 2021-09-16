<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CollarPosition extends Model
{
    use HasFactory;

    protected $table = 'collar_readings';

    public function readings(){
        return $this->hasMany(DepthReading::class);
    }
}
