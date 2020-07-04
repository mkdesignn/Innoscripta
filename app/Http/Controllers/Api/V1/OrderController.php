<?php

namespace App\Http\Controllers\Api\V1;

use App\Enum\PaymentType;
use App\Enum\Status;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductListRequest;
use App\Http\Requests\StoreOrderRequest;
use App\Model\OrderArticle;
use App\Model\OrderHeader;
use App\Services\OrderService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class OrderController extends Controller
{

    /**
     * @var OrderService
     */
    private $orderService;

    /**
     * OrderController constructor.
     * @param OrderService $orderService
     */
    public function __construct(OrderService $orderService)
    {

        $this->orderService = $orderService;
    }

    /**
     * @SWG\Post(path="/orders",
     *     tags={"products"},
     *     summary="Store a new order",
     *     operationId="storeOrder",
     *     produces={"application/json"},
     *    @SWG\Parameter(
     *        name="order",
     *        in="body",
     *        description="Request body",
     *        @SWG\Schema(
     *          type="object",
     *          @SWG\Property(
     *              property="customer_address",
     *              type="string"
     *          ),
     *          @SWG\Property(
     *              property="customer_name",
     *              type="string"
     *          ),
     *          @SWG\Property(
     *              property="customer_surname",
     *              type="string"
     *          ),
     *          @SWG\Property(
     *              property="products",
     *              type="array",
     *              @SWG\Items(
     *                type="object",
     *                @SWG\Property(
     *                  property="id",
     *                  type="integer"
     *                ),
     *                @SWG\Property(
     *                 property="quantity",
     *                 type="integer"
     *               )
     *             ),
     *          ),
     *     )),
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
     */
    public function storeOrder(StoreOrderRequest $request)
    {
        return $this->orderService->storeOrder($request);
    }


}
