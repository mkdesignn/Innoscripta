<?php

namespace Tests\Feature;

use App\Http\Resources\ProductResource;
use App\Model\Category;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ProductTest extends TestCase
{

    use DatabaseMigrations;

    /**
     * @test
     *
     * @return void
     */
    public function getList_should_throw_an_error_if_category_not_sent()
    {
        $this->get('api/products')
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['category']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function getList_should_throw_an_error_if_category_was_not_integer()
    {
        $this->get('api/products?category=wdwwd')
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['category']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function getList_should_throw_an_error_if_category_was_mines()
    {
        $this->get('api/products?category=-1')
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['category']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function getList_should_throw_an_error_if_category_was_not_in_the_database()
    {
        $this->get('api/products?category=234')
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['category']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function getList_should_throw_an_error_if_size_was_not_integer()
    {
        $this->get('api/products?size=wdwd')
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['size']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function getList_should_throw_an_error_if_size_was_less_than_zero()
    {
        $this->get('api/products?size=-1')
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['size']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function getList_should_throw_an_error_if_page_was_less_than_zero()
    {
        $this->get('api/products?page=-1')
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['page']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function getList_should_throw_an_error_if_page_was_not_integer()
    {
        $this->get('api/products?page=wdwd')
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['page']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function getList_should_return_success_if_all_goes_well()
    {
        $category = factory(Category::class)->create(['name' => 'pizza', 'slug' => 'pizza']);
        $product = $this->createProduct($category);

        $this->get('api/products?category='.$category->id)
            ->assertStatus(self::HTTP_OK);
    }


    /**
     * @test
     *
     * @return void
     */
    public function getList_should_return_specific_results_if_all_goes_well()
    {
        $category = factory(Category::class)->create(['name' => 'pizza', 'slug' => 'pizza']);
        $product = $this->createProduct($category);

        $productResult = (new ProductResource($product))->jsonSerialize();

        $this->get('api/products?category='.$category->id)
            ->assertJson(['data'=>[$productResult]]);
    }
}
