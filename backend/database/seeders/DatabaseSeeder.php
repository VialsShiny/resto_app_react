<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Appel des seeders
        $this->call([
            CategoriesTableSeeder::class,
            ProductsTableSeeder::class,
            UsersTableSeeder::class,
            OrdersTableSeeder::class,
            OrderItemsTableSeeder::class,
            ProductImagesTableSeeder::class,
            ExtrasTableSeeder::class,
            ProductExtraTableSeeder::class,
            ContactMessagesTableSeeder::class,
        ]);
    }
}
