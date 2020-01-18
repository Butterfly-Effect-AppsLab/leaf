from flask import Flask, redirect, request, url_for, json
from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)
import os
from oauthlib.oauth2 import WebApplicationClient
import requests
from sqlalchemy.orm import sessionmaker, exc
from database.db_conn import connect
from database.db_models import User
from datetime import datetime

# ---------------------------------------------------------------------------------

app = Flask("__main__")
app.secret_key = os.urandom(24)

db_conn = connect()
Session = sessionmaker(db_conn)
session = Session()

# ---------------------------------------------------------------------------------

os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'

# Configuration
GOOGLE_CLIENT_ID = ""
GOOGLE_CLIENT_SECRET = ""
GOOGLE_DISCOVERY_URL = (
    "https://accounts.google.com/.well-known/openid-configuration"
)

# User session management setup
login_manager = LoginManager()
login_manager.init_app(app)

# OAuth2 client setup
client = WebApplicationClient(GOOGLE_CLIENT_ID)

# ---------------------------------------------------------------------------------


@login_manager.unauthorized_handler
def unauthorized():
    return "You must be logged in to access this content.", 403


@login_manager.user_loader
def load_user(user_id):
    return session.query(User).filter(User.id_google == user_id).one()


@app.route("/logout")
# @login_required
def logout():
    logout_user()
    return redirect(url_for("index"))


def get_google_provider_cfg():
    return requests.get(GOOGLE_DISCOVERY_URL).json()

# ---------------------------------------------------------------------------------


@app.route("/")
def index():
    if current_user.is_authenticated:
        return (
            "<p>Hello, {}! You're logged in! Email: {}</p>"
            "<p>id_google {}!</p>"
            '<a class="button" href="/logout">Logout</a>'.format(
                current_user.name, current_user.email, current_user.id_google
            )
        )
    else:
        return '<a class="button" href="/login">Google Login</a>'


@app.route("/login")
def login():
    # Find out what URL to hit for Google login
    google_provider_cfg = get_google_provider_cfg()
    authorization_endpoint = google_provider_cfg["authorization_endpoint"]

    request_uri = client.prepare_request_uri(
        authorization_endpoint,
        redirect_uri=request.base_url + "/callback",
        scope=["openid", "email", "profile"],
    )
    return redirect(request_uri)

# ---------------------------------------------------------------------------------


@app.route("/login/callback")
def callback():
    # Get authorization code Google sent back to you
    code = request.args.get("code")

    # Find out what URL to hit to get tokens that allow you to ask for
    # things on behalf of a user
    google_provider_cfg = get_google_provider_cfg()
    token_endpoint = google_provider_cfg["token_endpoint"]

    token_url, headers, body = client.prepare_token_request(
        token_endpoint,
        authorization_response=request.url,
        redirect_url=request.base_url,
        code=code,
    )
    token_response = requests.post(
        token_url,
        headers=headers,
        data=body,
        auth=(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET),
    )

    # Parse the tokens
    client.parse_request_body_response(json.dumps(token_response.json()))

    userinfo_endpoint = google_provider_cfg["userinfo_endpoint"]
    uri, headers, body = client.add_token(userinfo_endpoint)
    userinfo_response = requests.get(uri, headers=headers, data=body)

    if userinfo_response.json().get("email_verified"):
        unique_id = userinfo_response.json()["sub"]
        users_email = userinfo_response.json()["email"]
        # picture = userinfo_response.json()["picture"]
        users_name = userinfo_response.json()["given_name"]
    else:
        return "User email not available or not verified by Google.", 400

    try:
        user = session.query(User).filter(User.id_google == unique_id).one()
    except exc.NoResultFound:
        user = User(id_google=unique_id, name=users_name, email=users_email, created_at=datetime.now())
        session.add(user)
        session.commit()

    login_user(user)

    return redirect(url_for("index"))


if __name__ == "__main__":
    app.run(debug=True)
