<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('categories')->insert([
            ['name' => 'Burger', 'description' => 'Juicy grilled burgers with fresh ingredients'],
            ['name' => 'Pizza', 'description' => 'Delicious hand-crafted pizzas with a variety of toppings'],
            ['name' => 'Cup Cake', 'description' => 'Sweet and flavorful cupcakes with various frostings'],
            ['name' => 'Ramen', 'description' => 'Hot and savory ramen noodles with rich broth and toppings'],
        ]);
    }
}

