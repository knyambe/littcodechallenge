<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\DrillHole;
use \App\Models\CollarPosition;
use \App\Models\DepthReading;

class SurveyInstrumentController extends Controller
{
    public function ListDrillHoles(Request $request, DrillHole $hole){
        $holes = $hole->all();

        return \response()->json($holes, 200);
    }

    public function ListPositions(Request $request, DrillHole $hole){
        $positions = $hole->surveys()->with('readings')->paginate();

        return \response()->json($positions, 200);
    }

    public function ToggleDepthReadingAccuracy(Request $request, DepthReading $reading){
        $reading->accurate = !$reading->accurate;
        $reading->save();
        return \response()->json($reading, 201);
    }
}
