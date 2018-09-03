CREATE DATABASE clothes_db;
USE clothes_db;

CREATE TABLE users 
(
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR (250) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);