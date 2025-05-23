<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Client\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function details($id)
    {
        // Récupère le produit avec ses extras et ses reviews + les users liés aux reviews
        $product = Product::with(['extras', 'reviews.user'])->findOrFail($id);

        // Transforme les reviews
        $reviews = $product->reviews->map(function ($review) {
            return [
                'user' => optional($review->user)->name ?? 'Utilisateur inconnu',
                'rating' => $review->rating,
                'comment' => $review->comment,
                'date' => $review->created_at->format('Y-m-d'),
            ];
        });

        // Calcule la moyenne des notes
        $rateAverage = $product->reviews->avg('rating');

        // Retourne le JSON formaté
        return response()->json([
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'price' => $product->price,
                'image' => $product->image,
            ],
            'extras' => $product->extras->map(function ($extra) {
                return [
                    'id' => $extra->id,
                    'name' => $extra->name,
                    'price' => $extra->price,
                ];
            }),
            'reviews' => $reviews,
            'rateAverage' => round($rateAverage, 2),
        ]);
    }


    public function filter(Request $request): JsonResponse
    {
        $json = $request->getContent();
        $data = json_decode($json, true);

        if (json_last_error() !== JSON_ERROR_NONE) {
            return response()->json(['error' => 'Invalid JSON'], 400);
        }

        $category_id = $data['category_id'];

        if ($category_id) {
            $products = Product::where('category_id', $category_id)->get();
        } else {
            $products = Product::all();
        }


        return response()->json([
            'message' => 'Données reçues',
            'products' => $products,
        ]);
    }
}
