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

$factory->define(\App\Model\OrderHeader::class, function (Faker $faker) {

    return [
        'code' => getNextInvoiceCode(),
        'customer_name'=>$faker->name,
        'customer_surname'=>$faker->lastName,
        'customer_address'=>$faker->address,
        'payment_type'=>\App\Enum\PaymentType::CREDIT,
        'deliver_price'=>env('DELIVERY_PRICE'),
        'status'=>\App\Enum\Status::PAID
    ];
});
