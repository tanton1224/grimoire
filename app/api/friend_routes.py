from flask import Blueprint, request
from app.models import db, Friend, User, friend_connection
from ..forms import FriendForm
from flask_login import current_user, login_required

friend_routes = Blueprint("friends", __name__, url_prefix="/friends")


@friend_routes.route("/<friend_id>", methods=['PUT'])
@login_required
def update_friend(friend_id):
    friend = Friend.query.get(friend_id)

    if not friend:
        raise ReferenceError("404: Deck could not be found")

    if friend.user_id != current_user.id:
        raise AssertionError("Unauthorized: This isn't your deck to edit")

    return user.to_dict()


@friend_routes.route("/", methods=['POST'])
@login_required
def create_request():
