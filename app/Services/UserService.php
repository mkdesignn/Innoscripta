<?php

namespace App\Services;


use App\Http\Requests\StoreUserRequest;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Model\User;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;

class UserService
{
    /**
     * @var User
     */
    private $user;

    /**
     * UserService constructor.
     * @param User $user
     */
    public function __construct(User $user)
    {

        $this->user = $user;
    }

    public function store(StoreUserRequest $request)
    {
        $createdUser = $this->user->create($request->only(['name', 'email']));

        return new UserResource($createdUser);
    }

    /**
     * @return JsonResource
     */
    public function me() : JsonResource
    {
        $userId = Auth::user()->id;

        return new UserResource();
    }

}
