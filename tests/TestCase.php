<?php

namespace Tests;

use App\Model\Admin;
use App\Model\Category;
use App\Model\Product;
use App\Model\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Support\Str;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;

    // Temp
    private $user;

    // HTTP status constants
    const HTTP_BAD_REQUEST = 400;
    const HTTP_OK = 200;
    const HTTP_CREATED = 201;
    const HTTP_NO_CONTENT = 204;
    const HTTP_NOT_FOUND = 404;
    const HTTP_UNAUTHORIZED = 401;
    const HTTP_WRONG_METHOD = 405;
    const HTTP_FORBIDDEN = 403;
    const HTTP_UNPROCESSABLE_ENTITY = 422;
    const HTTP_INTERNAL_ERROR = 500;
    const HTTP_SERVICE_UNAVALIABLE = 503;

    // database fields
    const IS_ADMIN = 'is_admin';
    const NAME = 'name';
    const TYPE = 'type';
    const DESCRIPTION = 'description';
    const USER_ID = 'user_id';
    const AMOUNT = 'amount';
    const EMAIL = 'email';
    const CREATED_AT = 'created_at';

    // Mock methods
    const USER = 'user';

    // Response Fields
    const USER_EMAIL = 'userEmail';
    const TOTAL_DEBIT = 'totalDebit';

    // Entity name
    const USERS = 'users';
    const TRANSACTIONS = 'transactions';

    // Endpoints
    const API_PRODUCT = 'api/products';
    const API_USER_TRANSACTION = 'api/users/transactions';

    // Auth
    protected function createToken()
    {
        $this->user = $user = factory(User::class)->create(['api_token'=>Str::random(60)]);
        return ['Authorization' => 'Bearer '.$user->api_token, 'Accept' => 'application/json'];
    }

    protected function getCreatedUser(){

        return $this->user;
    }

    public function createProduct(Category $category = null){

        $product = factory(Product::class)->create();

        if($category !== null){
            $product->category()->attach($category->id);
        }

        return $product;

    }

}
