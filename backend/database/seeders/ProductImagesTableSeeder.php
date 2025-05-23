<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductImagesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('product_images')->insert([
            ['product_id' => 1, 'image_url' => 'classic_burger_1.jpg'],
            ['product_id' => 1, 'image_url' => 'classic_burger_2.jpg'],
            ['product_id' => 2, 'image_url' => 'margherita_1.jpg'],
            ['product_id' => 3, 'image_url' => 'chocolate_cupcake_1.jpg'],
            ['product_id' => 4, 'image_url' => 'shoyu_ramen_1.jpg'],
        ]);
    }
}

