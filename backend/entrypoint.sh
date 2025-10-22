#!/usr/bin/env bash
set -e

DB_HOST="${DB_HOST:-mysql}"
DB_PORT="${DB_PORT:-3306}"
TIMEOUT=${DB_TIMEOUT:-60}

echo "Waiting for database ${DB_HOST}:${DB_PORT} (timeout ${TIMEOUT}s)..."

start_time=$(date +%s)
while true; do
  # vérifier si /dev/tcp est disponible et si la connexion s'ouvre
  if bash -c "cat < /dev/tcp/${DB_HOST}/${DB_PORT}" >/dev/null 2>&1; then
    echo "Base de données ${DB_HOST}:${DB_PORT} joignable."
    break
  fi

  now=$(date +%s)
  elapsed=$((now - start_time))
  if [ "$elapsed" -ge "$TIMEOUT" ]; then
    echo "Impossible de joindre la DB ${DB_HOST}:${DB_PORT} après ${TIMEOUT}s."
    exit 1
  fi

  sleep 1
done

# Exécuter les migrations (attention en prod : --seed est optionnel)
php artisan migrate:fresh --seed --force || true

# Exec la commande fournie au container
exec "$@"
