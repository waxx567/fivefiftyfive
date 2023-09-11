# App for home gas bottle delivery

Customers order gas bottle(s) on the app and pay by bank card

users.db tables:

CREATE TABLE user (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name TEXT NOT NULL, password_hash TEXT NOT NULL, address TEXT NOT NULL, phone TEXT NOT NULL );

CREATE TABLE order_items (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, date DATE DEFAULT(getdate()), item TEXT NOT NULL, price TEXT NOT NULL, name TEXT NOT NULL, FOREIGN KEY (name) REFERENCES user(name) );

Luhn's algorithm for credit card validation from: https://www.creditcardvalidator.org/developer
