<?php

namespace Tests\Feature;

use App\Http\Resources\ProductResource;
use App\Model\Category;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class CategoryTest extends TestCase
{

    use DatabaseMigrations;

    /**
     * @test
     *
     * @return void
     */
    public function getList_should_return_the_list_of_the_categories()
    {

        $category = factory(Category::class)->create(['name' => 'pizza', 'slug' => 'pizza']);

        $this->get('api/categories')
            ->assertStatus(self::HTTP_OK)
            ->assertExactJson(['data'=>[['id'=>$category->id, 'name'=>$category->name, 'image'=>imageBaseUrl().$category->image]]]);
    }

}
