<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExtrasTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('extras')->insert([
            ['name' => 'Extra Cheese', 'price' => 1.50, 'description' => 'Melted cheese topping for your pizza or burger'],
            ['name' => 'Bacon', 'price' => 2.00, 'description' => 'Crispy bacon strips to add to your burger'],
            ['name' => 'Avocado', 'price' => 1.00, 'description' => 'Fresh avocado slices to add to your burger or ramen'],
        ]);
    }
}
