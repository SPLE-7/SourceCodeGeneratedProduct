#!/bin/bash

cleanup() {
    echo "Exiting script..."
    pkill -P $$
    exit 1
}

trap cleanup SIGINT

read -p "Enter the path to the frontend directory: " frontend_dir

echo "SELECT 'CREATE DATABASE librarymanagementsystem_product_productmandatory' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'librarymanagementsystem_product_productmandatory') \gexec" | psql "postgresql://postgres:admin@localhost"
for file in sql/*.sql; do
    psql -a -f "$file" "postgresql://postgres:admin@localhost/librarymanagementsystem_product_productmandatory"
done

java -cp librarymanagementsystem.product.productmandatory --module-path librarymanagementsystem.product.productmandatory -m librarymanagementsystem.product.productmandatory &

cd $frontend_dir && {
    npm install && {
        npm run json:server &
        npm run start &
    }
}

wait