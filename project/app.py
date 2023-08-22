import sqlite3
from contextlib import closing
from flask import Flask, render_template, request, redirect, session
from flask_session import Session
import sqlite3

from helpers import apology, login_required

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


@app.route("/", methods=["GET", "POST"])
def index():
    return render_template("index.html")


@app.route("/bikes", methods=["GET"])
def bikes():
    return render_template("triumph.html")
    # below is for the version that changes the single page content with JavaScript
    # return render_template("bikes.html")


@app.route("/triumph", methods=["GET"])
def triumph():
    return render_template("triumph.html")


@app.route("/ktm", methods=["GET"])
def ktm():
    return render_template("ktm.html")


@app.route("/mvagusta", methods=["GET"])
def mvagusta():
    return render_template("mvagusta.html")


@app.route("/ducati", methods=["GET"])
def ducati():
    return render_template("ducati.html")


@app.route("/about", methods=["GET"])
def about():
    return render_template("dealer.html")
    # below is for the version that changes the single page content with JavaScript
    # return render_template("about.html")


@app.route("/dealer", methods=["GET"])
def dealer():
    return render_template("dealer.html")


@app.route("/sales", methods=["GET"])
def sales():
    return render_template("sales.html")


@app.route("/finance", methods=["GET"])
def finance():
    return render_template("finance.html")


@app.route("/workshop", methods=["GET"])
def workshop():
    return render_template("workshop.html")


@app.route("/contact", methods=["GET"])
def contact():
    return render_template("contact.html")


@app.route("/contact_form", methods=["POST"])
def contact_form():
    #  Ensure user input is correct
    contact_name = request.form.get("contact-name")
    if not contact_name:
        return apology("must provide contact name", 400)
    contact_email = request.form.get("contact-email")
    if not contact_email:
        return apology("must provide email address", 400)
    contact_message = request.form.get("contact-message")
    if not contact_message:
        return apology("must provide message", 400)

    #  Update contact table
    db.execute(
        "INSERT INTO contact (id, contact_name, contact_email, contact_message) VALUES (?, ?, ?)",
        contact_name,
        contact_email,
        contact_message,
    )

    #  Redirect user to home page
    return redirect("/")


@app.route("/newsletter", methods=["POST"])
def newsletter():
    #  Ensure user input is correct
    newsletter_email = request.form.get("newsletter-email")
    if not newsletter_email:
        return apology("must provide email address", 400)


@app.route("/blog", methods=["GET", "POST"])
@login_required
def blog():
    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("blog.html")


if __name__ == "__main__":
    app.run(debug=True)
