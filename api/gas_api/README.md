# App for home gas bottle delivery

Customers order gas bottle(s) on the app and pay by bank card

users.db tables:

CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT NOT NULL, password_hash TEXT NOT NULL, address TEXT NOT NULL, phone TEXT NOT NULL );

CREATE TABLE order_items (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, item TEXT NOT NULL, price TEXT NOT NULL, user_id TEXT NOT NULL, FOREIGN KEY (user_id) REFERENCES user(id) );

Luhn's algorithm for credit card validation from: https://www.creditcardvalidator.org/developer
