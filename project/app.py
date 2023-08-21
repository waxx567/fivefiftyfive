from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/bikes")
def bikes():
    return render_template("bikes.html")
    # this is the version that changes the single page content with JavaScript
    # if flask routing for pages (loads new page each time)
    # then uncomment this line below
    # return render_template("triumph.html")
    # and comment out the one above


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


@app.route("/dealer")
def dealer():
    return render_template("dealer.html")


if __name__ == "__main__":
    app.run(debug=True)
