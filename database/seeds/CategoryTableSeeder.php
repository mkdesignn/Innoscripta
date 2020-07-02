<?php

use App\Model\Category;
use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Category::class)->create(['name'=>'pizza', 'slug'=>'pizza', 'description'=>'pizza product']);
        factory(Category::class)->create(['name'=>'burger', 'slug'=>'burger', 'description'=>'burger product']);
        factory(Category::class)->create(['name'=>'soft drink', 'slug'=>'soft-drink', 'description'=>'soft-drink product']);
        factory(Category::class)->create(['name'=>'coffee', 'slug'=>'coffee', 'description'=>'coffee products']);
        factory(Category::class)->create(['name'=>'ice cream', 'slug'=>'ice-cream', 'description'=>'ice-cream products']);
    }
}
