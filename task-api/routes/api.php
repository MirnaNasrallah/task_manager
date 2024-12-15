<?php

use App\Http\Controllers\TaskController;
use App\Http\Controllers\TodoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::apiResource('tasks', TaskController::class);

Route::get('/show',[TaskController::class,'index_static']);
