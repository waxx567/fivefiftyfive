from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/services")
def services():
    return render_template("services.html")


@app.route("/mv")
def mv():
    return render_template("mv.html")


@app.route("/triumph")
def triumph():
    return render_template("triumph.html")


@app.route("/ktm")
def ktm():
    return render_template("ktm.html")
