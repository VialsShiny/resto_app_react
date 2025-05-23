<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function extras()
    {
        return $this->belongsToMany(Extra::class, 'product_extra');
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

}
