#!/bin/sh
# wait for MySQL
sleep 5

# Générer la clé si elle n'existe pas
php artisan key:generate || true

# Lancer les migrations
php artisan migrate --seed

# Démarrer le serveur
php artisan serve --host=0.0.0.0 --port=8000
