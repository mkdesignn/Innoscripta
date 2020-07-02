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

$factory->define(\App\Model\Category::class, function (Faker $faker) {


//    $table->increments('id');
//    $table->integer('parent_id');
//    $table->string('name');
//    $table->string('slug');
//    $table->string('description');
//    $table->string('type');
//    $table->integer('level');

    $name = $faker->name;
    return [
        'parent_id' => 0,
        'name' => $name,
        'slug' => snake_case($name),
        'description' => $faker->text,
        'level'=>0,
        'type'=>'product'
    ];
});
