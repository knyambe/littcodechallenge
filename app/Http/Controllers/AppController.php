<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\NgBuildService;

class AppController extends Controller
{
    public function index(NgBuildService $ng)
    {
        return view('app', ['ngAssets' => $ng->assets]);
    }
}
