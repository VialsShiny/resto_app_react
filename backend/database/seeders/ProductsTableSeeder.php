<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('products')->insert([
            ['category_id' => 1, 'name' => 'Classic Burger', 'description' => 'Beef patty with lettuce, tomato, and cheese', 'image' => 'classic_burger.jpg', 'price' => 7.49, 'status' => 'available'],
            ['category_id' => 1, 'name' => 'Cheese Burger', 'description' => 'Beef patty with melted cheese and pickles', 'image' => 'cheese_burger.jpg', 'price' => 8.49, 'status' => 'available'],
            ['category_id' => 1, 'name' => 'Veggie Burger', 'description' => 'Vegetarian patty with avocado and lettuce', 'image' => 'veggie_burger.jpg', 'price' => 6.99, 'status' => 'available'],
            ['category_id' => 2, 'name' => 'Margherita Pizza', 'description' => 'Classic pizza with mozzarella cheese and tomato sauce', 'image' => 'margherita.jpg', 'price' => 8.99, 'status' => 'available'],
            ['category_id' => 2, 'name' => 'Pepperoni Pizza', 'description' => 'Pizza topped with pepperoni and mozzarella cheese', 'image' => 'pepperoni.jpg', 'price' => 9.99, 'status' => 'available'],
            ['category_id' => 2, 'name' => 'BBQ Chicken Pizza', 'description' => 'Pizza with BBQ sauce, grilled chicken, and onions', 'image' => 'bbq_chicken.jpg', 'price' => 10.49, 'status' => 'available'],
            ['category_id' => 3, 'name' => 'Chocolate Cup Cake', 'description' => 'Rich chocolate cake with chocolate frosting', 'image' => 'chocolate_cupcake.jpg', 'price' => 2.99, 'status' => 'available'],
            ['category_id' => 3, 'name' => 'Vanilla Cup Cake', 'description' => 'Light and fluffy vanilla cake with creamy frosting', 'image' => 'vanilla_cupcake.jpg', 'price' => 2.79, 'status' => 'available'],
            ['category_id' => 3, 'name' => 'Red Velvet Cup Cake', 'description' => 'Moist red velvet cake with cream cheese frosting', 'image' => 'red_velvet.jpg', 'price' => 3.29, 'status' => 'available'],
            ['category_id' => 4, 'name' => 'Shoyu Ramen', 'description' => 'Ramen noodles with soy-based broth, pork, and egg', 'image' => 'shoyu_ramen.jpg', 'price' => 12.99, 'status' => 'available'],
            ['category_id' => 4, 'name' => 'Miso Ramen', 'description' => 'Ramen with miso-based broth, chicken, and vegetables', 'image' => 'miso_ramen.jpg', 'price' => 13.49, 'status' => 'available'],
        ]);
    }
}

