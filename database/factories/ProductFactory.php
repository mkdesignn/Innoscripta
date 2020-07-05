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

$factory->define(\App\Model\Product::class, function (Faker $faker) {


    return [
        'name' => $faker->name,
        'avatar'=>'bbq-chicken-pizza.jpeg',
        'content'=>$faker->text,
        'prepare_time'=>random_int(20, 40),
        'weight'=>array_random([300, 310, 320, 330, 340, 350, 360, 370, 380, 390, 400]),
        'price'=>random_int(18, 40),
        'status'=>'approved',
        'quantity'=>1,
        'visible'=>true,
        'ingredients'=>json_encode(['test'])
    ];
});
