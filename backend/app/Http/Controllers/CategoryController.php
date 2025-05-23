<?php

namespace App\Http\Controllers;

use App\Models\Category;

class CategoryController extends Controller
{
    public function index()
    {
        try {
            $categories = Category::all();

            return response()->json([
                'success' => true,
                'categories' => $categories
            ], 200); // 200 OK

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'error' => 'Une erreur est survenue lors de la récupération des catégories.',
                'message' => $e->getMessage()
            ], 500); // ERREUR 500 Internal Server Error
        }
    }

    public function getAllCategories()
    {
        $categories = Category::with(['products:id,category_id,name,description,price,image'])->get(['id', 'name', 'description']);
    

        return response()->json([
            'message' => 'Données reçues',
            'categories' => $categories,
        ]);
    }
}
