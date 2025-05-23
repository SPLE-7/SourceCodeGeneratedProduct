#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE librarymanagementsystem_product_productsatu' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'librarymanagementsystem_product_productsatu') \gexec" | psql "postgresql://postgres:admin@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:admin@localhost/librarymanagementsystem_product_productsatu"
done

java -cp librarymanagementsystem.product.productsatu --module-path librarymanagementsystem.product.productsatu -m librarymanagementsystem.product.productsatu &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait