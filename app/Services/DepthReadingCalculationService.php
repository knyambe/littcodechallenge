<?php
namespace App\Services;

use Exception;
use \App\Models\DepthReading;

class DepthReadingCalculationService
{
    public function CalculateAccuracyForReading(DepthReading $reading){
        $previous = DepthReading::where('id', '<', $reading->id)
        ->where('collar_position_id', $reading->collar_position_id)
        ->orderBy('id', 'desc')->take(1)->get()->first();
        if(is_null($previous)){
            $reading->accurate = 1;
            $reading->save();
            return;
        }
        if(!($previous->azimuth >= ($reading->azimuth - 5) && $previous->azimuth <= ($reading->azimuth + 5))) return;

        $previous_avg = DepthReading::where('id', '<', $reading->id)
        ->where('collar_position_id', $reading->collar_position_id)
        ->orderBy('id', 'desc')
        ->take(5)
        ->get()
        ->avg('dip');
        if(is_null($previous_avg)) return;
        if(!($previous_avg >= ($reading->dip - 3) && $previous_avg <= ($reading->dip + 3))) return ;

        $reading->accurate = 1;
        $reading->save();
    }
}