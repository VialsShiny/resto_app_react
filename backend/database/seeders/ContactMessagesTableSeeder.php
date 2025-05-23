<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ContactMessagesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('contact_messages')->insert([
            ['name' => 'Alice Dupont ', 'email' => 'alice.dupont@example.com', 'message' => 'Bonjour, je voulais savoir si vous livrez dans le 18e arrondissement ?'],
            ['name' => 'Marc Lemoine', 'email' => 'marc.lemoine@example.com', 'message' => 'Très satisfait de ma commande. Merci pour la rapidité !'],
            ['name' => 'Claire Fontaine', 'email' => 'claire.fontaine@example.com', 'message' => 'Est-ce que vous proposez des options végétariennes ?'],
            ['name' => 'Nicolas Bernard', 'email' => 'nicolas.bernard@example.com', 'message' => 'J’ai rencontré un problème de paiement, pouvez-vous m’aider ?'],
            ['name' => 'Sophie Martin', 'email' => 'sophie.martin@example.com', 'message' => 'Merci pour les cupcakes, ils étaient délicieux !'],
        ]);
    }
}

