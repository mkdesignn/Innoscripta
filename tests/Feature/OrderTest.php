<?php

namespace Tests\Feature;

use App\Enum\PaymentType;
use App\Enum\Status;
use App\Http\Resources\OrderResource;
use App\Http\Resources\ProductResource;
use App\Model\Category;
use App\Model\OrderArticle;
use App\Model\OrderHeader;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class OrderTest extends TestCase
{

    use DatabaseMigrations;

    /**
     * @test
     *
     * @return void
     */
    public function storeOrder_should_throw_an_error_if_name_was_missing()
    {

        $this->json('post', 'api/orders')
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['customer_name']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function storeOrder_should_throw_an_error_if_surname_was_missing()
    {

        $this->json('post', 'api/orders')
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['customer_surname']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function storeOrder_should_throw_an_error_if_products_was_missing()
    {

        $this->json('post', 'api/orders')
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['products']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function storeOrder_should_throw_an_error_if_address_was_missing()
    {

        $this->json('post', 'api/orders')
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['customer_address']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function storeOrder_should_throw_an_error_if_product_was_missing()
    {

        $this->json('post', 'api/orders')
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['products']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function storeOrder_should_throw_an_error_if_product_not_found()
    {

        $this->json('post', 'api/orders', ['products'=>[['id'=>1, 'quantity'=>2]]])
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['products.0.id']]);
    }


    /**
     * @test
     *
     * @return void
     */
    public function storeOrder_should_throw_an_error_if_product_id_was_not_integer()
    {

        $this->json('post', 'api/orders', ['products'=>[['id'=>'www', 'quantity'=>2]]])
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['products.0.id']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function storeOrder_should_throw_an_error_if_quantity_was_not_integer()
    {

        $this->json('post', 'api/orders', ['products'=>[['id'=>'www', 'quantity'=>'-2']]])
            ->assertStatus(self::HTTP_UNPROCESSABLE_ENTITY)
            ->assertJsonStructure(['errors'=>['products.0.id']]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function storeOrder_should_return_success_if_all_goes_well()
    {
        $product = $this->createProduct(factory(Category::class)->create(['name'=>'pizza']));

        $this->json('post', 'api/orders', [
            'customer_name'=>'test',
            'customer_surname'=>'test',
            'customer_address'=>'test',
            'products'=>[['id'=>$product->id, 'quantity'=>1]]])
            ->assertStatus(self::HTTP_CREATED)
            ->assertJson([
                    'data'=> [
                        'customer_name'=>'test',
                        'customer_surname'=>'test',
                        'customer_address'=>'test',
                        'payment_type'=>PaymentType::CREDIT,
                        'deliver_price'=>env('DELIVERY_PRICE'),
                        'status'=>Status::PAID,
                        'articles'=>[
                            ['product_name'=>$product->name, 'price'=>$product->price, 'quantity'=>1, 'weight'=>$product->weight]
                        ]
                    ]
            ]);
    }

    /**
     * @test
     *
     * @return void
     */
    public function getList_should_return_success_if_all_goes_well()
    {
        $orderArticle = factory(OrderArticle::class)->create();
        $orderHeader = $orderArticle->header;

        $this->json('get', 'api/orders')
            ->assertStatus(self::HTTP_OK)
            ->assertJson([
                'data'=> [[
                    'id' => $orderHeader->id,
                    'code'=>$orderHeader->code,
                    'customer_name'=>$orderHeader->customer_name,
                    'customer_surname'=>$orderHeader->customer_surname,
                    'customer_address'=>$orderHeader->customer_address,
                    'payment_type'=>PaymentType::CREDIT,
                    'deliver_price'=>env('DELIVERY_PRICE'),
                    'status'=>Status::PAID,
                    'articles'=>[
                        [
                            'product_name'=>$orderArticle->product->name,
                            'price'=>(string)$orderArticle->price,
                            'quantity'=>'1',
                            'weight'=>(string)$orderArticle->weight
                        ]
                    ]
                ]]
            ]);
    }
}
