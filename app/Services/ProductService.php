<?php

namespace App\Services;


use App\Http\Requests\ProductListRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\ProductResource;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Model\Product;
use App\Model\User;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class ProductService
{
    /**
     * @var User
     */
    private $product;

    /**
     * UserService constructor.
     * @param Product $product
     */
    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    public function list(ProductListRequest $request)
    {
        $page = $request->has('page') ? $request->page : 0;
        $size = $request->has('size') ? $request->size : 5;

        $products = $this
            ->product
            ->whereHas('category', function($query) use($request){
                !$request->has('category') ?: $query->where('id', $request->category);
            })
            ->limit($size)->skip($page * $size)
            ->get();

        return ProductResource::collection($products);
    }

}
