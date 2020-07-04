<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductListRequest;
use App\Services\ProductService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductController extends Controller
{
    /**
     * @var ProductService
     */
    private $productService;

    /**
     * ProductController constructor.
     * @param ProductService $productService
     */
    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }


    /**
     * @SWG\Get(path="/products",
     *     tags={"products"},
     *     summary="Get the list of the products",
     *     operationId="productList",
     *     produces={"application/json"},
     *     @SWG\Parameter(
     *      description="Category",
     *      in="query",
     *      name="category",
     *      required=true,
     *      type="integer",
     *     ),
     *     @SWG\Parameter(
     *      description="size",
     *      in="query",
     *      name="size",
     *      required=false,
     *      type="integer",
     *      default="5"
     *     ),
     *     @SWG\Parameter(
     *      description="page",
     *      in="query",
     *      name="page",
     *      required=false,
     *      type="integer",
     *      default="0"
     *     ),
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
     * @param ProductListRequest $request
     * @return AnonymousResourceCollection
     */
    public function getList(ProductListRequest $request)
    {
        return $this->productService->list($request);
    }
}
