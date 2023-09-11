from cs50 import SQL
from flask import Flask, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import apology, login_required

# Configure application
app = Flask(__name__)

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///users.db")


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


# Price constants
GAS9 = 350
GAS18 = 750


@app.route("/")
@login_required
def index():
    """Show user status"""

    # Query database for username
    name = db.execute("SELECT user_name FROM user WHERE id = ?", session["user_id"])[0][
        "user_name"
    ]

    return render_template("index.html", name=name)


@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""

    # Clear user id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":
        # Ensure user name was submitted and store in variable
        name = request.form.get("username")
        if not name:
            return apology("must provide user name", 400)

        # Ensure delivery address was submitted and store in variable
        address = request.form.get("address")
        if not address:
            return apology("must provide delivery address", 400)

        # Ensure phone number was submitted and store in variable
        phone = request.form.get("phone")
        if not phone:
            return apology("must provide phone number", 400)

        # Ensure password was submitted and store in variable
        password = request.form.get("password")
        if not password:
            return apology("must provide password", 400)

        # Ensure password confirmation was submitted and store in variable
        confirmation = request.form.get("confirmation")
        if not confirmation:
            return apology("must provide confirmation", 400)

        # Ensure password was a match for confirm password
        if password != confirmation:
            return apology("passwords must match", 400)

        # Query database for username
        name_check = db.execute("SELECT * FROM user WHERE name = ?", name)

        # Ensure user name not in use
        if len(name_check) != 0:
            return apology("user name in use", 400)

        # Hash password
        password_hash = generate_password_hash(password)

        # Add user to database
        db.execute(
            "INSERT INTO user (name, password_hash, address, phone) VALUES(?, ?, ?, ?)",
            name,
            password_hash,
            address,
            phone,
        )

        # Redirect user to home page
        return render_template("login.html")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("register.html")


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":
        # Ensure user name was submitted
        if not request.form.get("username"):
            return apology("must provide user name", 400)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 400)

        # Query database for user name
        row = db.execute(
            "SELECT * FROM user WHERE name = ?", request.form.get("username")
        )

        # Ensure user name exists in database
        if len(row) != 1:
            return apology("invalid user name", 400)

        # Ensure password is correct
        if not check_password_hash(
            row[0]["password_hash"], request.form.get("password")
        ):
            return apology("invalid password", 400)

        # Remember which user has logged in
        session["user_id"] = row[0]["id"]

        # Query database for user name
        name = request.form.get("username")

        # Redirect user to home page
        return render_template("index.html", name=name)

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/product", methods=["POST"])
@login_required
def product():
    """Get requested product information"""

    # Assign values depending on which button was clicked
    try:
        choice = request.form.get("gas-9")
        choice = "9kg gas bottle"
    except:
        choice = request.form.get("gas-18")
        choice = "18kg gas bottle"

    # Assign prices
    if choice in ["9kg gas bottle"]:
        price = GAS9
    elif choice in ["18kg gas bottle"]:
        price = GAS18

    # Query database for user name
    name = db.execute("SELECT user_name FROM user WHERE id = ?", session["user_id"])[0][
        "user_name"
    ]

    return render_template("payment.html", choice=choice, price=price, name=name)


@app.route("/validate", methods=["POST"])
@login_required
def validate():
    """Validate credit card information, log order, and render confirmation of order to user"""

    # Validate card number
    # Assign values so user cn be informed on confirmation page
    product = request.form.get("choice")
    if product in ["9kg gas bottle"]:
        price = GAS9
    elif product in ["18kg gas bottle"]:
        price = GAS18

    first_name = request.form.get("firstname")
    if not first_name:
        return render_template("payment.html")
    email = request.form.get("email")
    if not email:
        return render_template("payment.html")
    address = request.form.get("address")
    if not address:
        return render_template("payment.html")
    city = request.form.get("city")
    if not city:
        return render_template("payment.html")
    state = request.form.get("state")
    if not state:
        return render_template("payment.html")
    zip = request.form.get("zip")
    if not zip:
        return render_template("payment.html")
    card_name = request.form.get("cardname")
    if not card_name:
        return render_template("payment.html")
    card_number = request.form.get("cardnumber")
    if not card_number:
        return render_template("payment.html")
    exp_month = request.form.get("expmonth")
    if not exp_month:
        return render_template("payment.html")
    exp_year = request.form.get("expyear")
    if not exp_year:
        return render_template("payment.html")
    cvv = request.form.get("cvv")
    if not cvv:
        return render_template("payment.html")
    same_adr = request.form.get("sameadr")
    if not same_adr:
        return render_template("payment.html")

    # Ensure correct user input
    try:
        # Length must be 16
        if len(card_number) == 16:
            # Each character must be a number
            for i in card_number:
                if not int(i):
                    # Back to try
                    continue
    # If not numbers entered
    except ValueError:
        # Back to try
        pass

    # Validate card number using Luhn's algorithm
    # From https://www.creditcardvalidator.org/developer
    r = [int(ch) for ch in str(card_number)][::-1]

    # If the card number is valid
    if (sum(r[0::2]) + sum(sum(divmod(d * 2, 10)) for d in r[1::2])) % 10 == 0:
        # Query database for user name
        name = db.execute(
            "SELECT user_name FROM user WHERE id = ?", session["user_id"]
        )[0]["user_name"]

        # Add order to datadase
        db.execute(
            "INSERT INTO order_items (date, item, price, name) VALUES (DEFAULT, :item, :price, :name)",
            item=product,
            price=price,
            name=name,
        )

        # Confirm order to user
        """THIS WILL BE THE CONFIRMATION PAGE ONCE BANK HAS VALIDATED"""
        return render_template("payment.html")

    else:
        return render_template("payment.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")
