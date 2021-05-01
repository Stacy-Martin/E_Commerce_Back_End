DROP DATABASE IF EXISTS ecommerce_db;

CREATE DATABASE ecommerce_db;

-- DO I NEED THIS USE COMMAND?
USE ecommerce_db;


-- TODO:  Fix syntax, mysql doesnt like these () or something
-- or is this the models section and not to be in this file at all?

CREATE TABLE category (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    category_name VARCHAR(30) NOT NULL, 
);


CREATE TABLE product (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    price DECIMAL NOT NULL 
    -- is_decimal($value, [$m], [$d], [$unsigned]); <= ? PRICE NEEDS VALIDATE THE VALUE IS A DECIMAL
    stock VARCHAR(10) NOT NULL,
    -- stock needs to validate that the value is numeric.
    -- STOCK SET DEFAULT VALUE TO 10 CORRECT??
    category_id VARCHAR(30),
    FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE,
;


CREATE TABLE tag (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    tag_name VARCHAR(30),
);


CREATE TABLE productTag (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES product(id) ON DELETE CASCADE,
    tag_id INT,
    FOREIGN KEY (tag_id) REFERENCES tag(id) ON DELETE CASCADE,
    -- TAG ID REFERENCES the Tag model's ID ??
);