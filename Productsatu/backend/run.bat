echo SELECT 'CREATE DATABASE librarymanagementsystem_product_productsatu' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'librarymanagementsystem_product_productsatu') \gexec | psql "postgresql://postgres:admin@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:admin@localhost/librarymanagementsystem_product_productsatu"

java -cp librarymanagementsystem.product.productsatu --module-path librarymanagementsystem.product.productsatu -m librarymanagementsystem.product.productsatu