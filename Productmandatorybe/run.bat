echo SELECT 'CREATE DATABASE librarymanagementsystem_product_productmandatorybe' WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'librarymanagementsystem_product_productmandatorybe') \gexec | psql "postgresql://postgres:admin@localhost"
for %%G in (sql/*.sql) do psql -a -f sql/%%G "postgresql://postgres:admin@localhost/librarymanagementsystem_product_productmandatorybe"

java -cp librarymanagementsystem.product.productmandatorybe --module-path librarymanagementsystem.product.productmandatorybe -m librarymanagementsystem.product.productmandatorybe