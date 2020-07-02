<?php

namespace App\Services;


use App\Http\Requests\ProductListRequest;
use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Model\Category;
use App\Model\Product;
use App\Model\User;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class CategoryService
{
    /**
     * @var User
     */
    private $category;

    /**
     * UserService constructor.
     * @param Category $category
     */
    public function __construct(Category $category)
    {
        $this->category = $category;
    }

    public function list()
    {
        return CategoryResource::collection($this->category->get());
    }

}
