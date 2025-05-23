<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductExtraTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('product_extra')->insert([
            ['product_id' => 2, 'extra_id' => 1], // Margherita Pizza + Extra Cheese
            ['product_id' => 4, 'extra_id' => 2], // Classic Burger + Bacon
            ['product_id' => 6, 'extra_id' => 3], // BBQ Chicken Pizza + Avocado
        ]);
    }
}
