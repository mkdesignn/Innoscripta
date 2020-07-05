<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(\App\Model\OrderArticle::class, function (Faker $faker) {

//    $table->integer('product_id');
//    $table->integer('order_header_id');
//    $table->integer('price');
//    $table->integer('quantity');
//    $table->integer('weight');
//    $table->text('description')->nullable();

    return [
        'product_id'=>factory(\App\Model\Product::class)->create(),
        'order_header_id'=>factory(\App\Model\OrderHeader::class)->create(),
        'price'=>random_int(1000, 2000000),
        'quantity'=>1,
        'weight'=>1
    ];
});
