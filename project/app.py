import sqlite3
from contextlib import closing
from flask import Flask, render_template, request, redirect, session
from flask_session import Session
import sqlite3

# Configure application
app = Flask(__name__)

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

connection = sqlite3.connect("users.db")
db = connection.cursor()


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/bikes")
def bikes():
    return render_template("triumph.html")
    # below is for the version that changes the single page content with JavaScript
    # return render_template("bikes.html")


@app.route("/triumph")
def triumph():
    return render_template("triumph.html")


@app.route("/ktm")
def ktm():
    return render_template("ktm.html")


@app.route("/mvagusta")
def mvagusta():
    return render_template("mvagusta.html")


@app.route("/ducati")
def ducati():
    return render_template("ducati.html")


@app.route("/about")
def about():
    return render_template("dealer.html")
    # below is for the version that changes the single page content with JavaScript
    # return render_template("about.html")


@app.route("/dealer")
def dealer():
    return render_template("dealer.html")


@app.route("/sales")
def sales():
    return render_template("sales.html")


@app.route("/finance")
def finance():
    return render_template("finance.html")


@app.route("/workshop")
def workshop():
    return render_template("workshop.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.route("/contact_form")
def contact_form():
    return render_template("contact-form.html")
    # with closing(sqlite3.connect("users.db")) as connection:
    # with closing(connection.cursor()) as db:


@app.route("/newsletter")
def newsletter():
    return render_template("newsletter.html")


@app.route("/blog")
def blog():
    return render_template("blog.html")


if __name__ == "__main__":
    app.run(debug=True)
