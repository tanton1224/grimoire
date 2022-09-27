from flask import Blueprint, request
from app.models import db, Friend, User, friend_connection
from ..forms import SpellcardForm
from flask_login import current_user, login_required

friend_routes = Blueprint("friends", __name__, url_prefix="/friends")


@friend_routes.route("/user/<user_id>")
def get_user_friends(user_id):
    pass
