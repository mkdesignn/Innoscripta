<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\MissingValue;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'code' => $this->code,
            'customer_name' => $this->customer_name,
            'customer_surname' => $this->customer_surname,
            'customer_address' => $this->customer_address,
            'payment_type' => $this->payment_type,
            'deliver_price' => $this->deliver_price,
            'status' => $this->status,
            'articles'=> ArticleResource::collection($this->articles),
            'created_at'=>$this->created_at->toDateTimeString()
        ];
    }
}
