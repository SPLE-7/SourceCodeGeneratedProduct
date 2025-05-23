echo SELECT 'CREATE DATABASE librarymanagementsystem_product_productdua' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'librarymanagementsystem_product_productdua') \gexec | psql "postgresql://postgres:admin@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:admin@localhost/librarymanagementsystem_product_productdua"

java -cp librarymanagementsystem.product.productdua --module-path librarymanagementsystem.product.productdua -m librarymanagementsystem.product.productdua