<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductListRequest;
use App\Model\Category;
use App\Services\CategoryService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class CategoryController extends Controller
{
    /**
     * @var Category
     */
    private $service;

    /**
     * CategoryController constructor.
     * @param CategoryService $service
     */
    public function __construct(CategoryService $service)
    {
        $this->service = $service;
    }


    /**
     *
     * @SWG\Get(path="/categories",
     *     tags={"categories"},
     *     summary="Get the list of the categories",
     *     operationId="categoryList",
     *     produces={"application/json"},
     *     @SWG\Response(
     *         response=200,
     *         description="Successful operation",
     *     ),
     *     @SWG\Response(
     *         response=400,
     *         description="Invalid request supplied"
     *     ),
     *     @SWG\Response(
     *         response=500,
     *         description="Internal server error"
     *     )
     * )
     * @return AnonymousResourceCollection
     */
    public function getList()
    {
        return $this->service->list();
    }


}
