"""Flask App configuration."""

# Configure session to use filesystem (instead of signed cookies)
SESSION_PERMANENT = False
SESSION_TYPE = "filesystem"
Session(app)
