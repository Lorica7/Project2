
USE sg8h337bdjqsdfnh;

CREATE TABLE burgers (
	id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(225),
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
    );
    
 USE sg8h337bdjqsdfnh;

INSERT INTO burgers (burger_name, devoured) VALUES ('Californa Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Veggie Burger', true);
INSERT INTO burgers (burger_name, devoured) VALUES ('Cheddar Cheeseburger', false);