<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\MissingValue;

class ProductResource extends JsonResource
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
            'name' => $this->name,
            'avatar' => url()->to('/') . '/images/'. $this->avatar,
            'prepare_time'=> $this->prepare_time,
            'description'=>$this->content,
            'weight'=>$this->weight,
            'ingredients'=>$this->ingredients,
            'price'=>$this->price,
            'quantity'=>$this->quantity
        ];
    }
}
