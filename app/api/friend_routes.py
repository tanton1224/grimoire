from flask import Blueprint, request
from app.models import db, Friend, User, friend_connection
from ..forms import SpellcardForm
from flask_login import current_user, login_required

friend_routes = Blueprint("friends", __name__, url_prefix="/friends")


@friend_routes.route("/user/<user_id>/friend/<friend_id>", methods=['PUT'])
@login_required
def accept_friend(user_id, friend_id):
    user = User.query.get(user_id)
    friend = User.query.get(friend_id)

    user.friends.append(friend)
    db.session.commit()

    return user.to_dict_friends()
