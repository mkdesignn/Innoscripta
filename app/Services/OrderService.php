<?php

namespace App\Services;


use App\Enum\PaymentType;
use App\Enum\Status;
use App\Http\Requests\ProductListRequest;
use App\Http\Requests\StoreOrderRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\OrderResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Model\Category;
use App\Model\OrderArticle;
use App\Model\OrderHeader;
use App\Model\Product;

class OrderService
{
    /**
     * @var OrderHeader
     */
    private $orderHeader;
    /**
     * @var OrderArticle
     */
    private $orderArticle;
    /**
     * @var Product
     */
    private $product;

    /**
     * UserService constructor.
     * @param OrderHeader $orderHeader
     * @param OrderArticle $orderArticle
     * @param Product $product
     */
    public function __construct(OrderHeader $orderHeader, OrderArticle $orderArticle, Product $product)
    {
        $this->orderHeader = $orderHeader;
        $this->orderArticle = $orderArticle;
        $this->product = $product;
    }

    public function storeOrder(StoreOrderRequest $request)
    {
        $createdOrder = $this->orderHeader->create(
            $request->only(['customer_name', 'customer_surname', 'customer_address']) +
            ['payment_type'=>PaymentType::CREDIT] + ['deliver_price'=>env('DELIVERY_PRICE'), 'status'=>Status::PAID]
        );

        foreach($request->products as $product)
        {
            $productModel = $this->product->whereId($product['id'])->first();
            $this->orderArticle->create([
                'product_id'=>$productModel->id,
                'order_header_id'=>$createdOrder->id,
                'price'=>$productModel->price,
                'quantity'=>$product['quantity'],
                'weight'=>$productModel->weight
            ]);
        }


        return new OrderResource($createdOrder);
    }

}
