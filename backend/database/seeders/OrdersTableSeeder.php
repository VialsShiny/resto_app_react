<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrdersTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('orders')->insert([
            ['user_id' => 1, 'total' => 18.48, 'status' => 'pending'],
        ]);
    }
}
