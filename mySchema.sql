DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE product (
item_id INT NOT NULL,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price INT NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 1, "Skate Wheels, 80mm Pack of 4", "Nick's Interests", 40, 75 );

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 2, "Sword", "Nick's Interests", 40, 75 );

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 3, "Bigger Sword", "Nick's Interests", 40, 75 );

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 4, "item", "Nick's Interests", 40, 75 );

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 5, "item", "Nick's Interests", 40, 75 );

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 6, "item", "Nick's Interests", 40, 75 );

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 7, "item", "Nick's Interests", 40, 75 );

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 8, "item", "Nick's Interests", 40, 75 );

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 9, "item", "Nick's Interests", 40, 75 );

INSERT INTO product (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 10, "item", "Nick's Interests", 40, 75 );\
SELECT * FROM product;