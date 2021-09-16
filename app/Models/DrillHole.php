<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DrillHole extends Model
{
    use HasFactory;

    public function surveys(){
        return $this->hasMany(CollarPosition::class);
    }
}
