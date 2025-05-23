echo SELECT 'CREATE DATABASE librarymanagementsystem_product_productmandatory' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'librarymanagementsystem_product_productmandatory') \gexec | psql "postgresql://postgres:admin@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:admin@localhost/librarymanagementsystem_product_productmandatory"

java -cp librarymanagementsystem.product.productmandatory --module-path librarymanagementsystem.product.productmandatory -m librarymanagementsystem.product.productmandatory