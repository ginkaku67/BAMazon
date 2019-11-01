DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE product (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100) NULL,
department_name VARCHAR(100) NULL,
price INT NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id)
);