from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)


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


@app.route("/newsletter")
def newsletter():
    return render_template("newsletter.html")


@app.route("/blog")
def blog():
    return render_template("blog.html")


if __name__ == "__main__":
    app.run(debug=True)
