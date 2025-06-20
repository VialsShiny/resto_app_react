<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;

use Illuminate\Support\Facades\Route;

Route::get('/categories', [CategoryController::class, 'index']);
Route::get('/categories/with/products', [CategoryController::class, 'getAllCategories']);
Route::get('/products/{id}', [ProductController::class, 'details']);

Route::post('/products', [ProductController::class, 'filter']);

Route::post('/signin', [AuthController::class, 'signin']);
Route::post('/signup', [AuthController::class, 'register']);
Route::middleware('auth:api')->get('/user', [AuthController::class, 'me']);
