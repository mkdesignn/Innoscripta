<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{

    protected $casts = [
      'ingredients'=>'array'
    ];

    /**
     * @return BelongsToMany
     */
    public function category(){
        return $this->belongsToMany(Category::class, "product_categories",
            'product_id', 'category_id');
    }

}
