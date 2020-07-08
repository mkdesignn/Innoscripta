<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['namespace'=>'Api\V1'], function(){

    Route::get('products', 'ProductController@getList');
    Route::get('categories', 'CategoryController@getList');

    Route::post('orders', 'OrderController@storeOrder');
    Route::get('orders', 'OrderController@getList');

    Route::get('pre-order', 'OrderController@preOrder');
});

