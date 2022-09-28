from flask import Blueprint, request
from app.models import db, Deck, Spellcard, User
from app.forms import DeckForm
from flask_login import login_required


profile_routes = Blueprint("profile", __name__, url_prefix="/profile")


@profile_routes.route('/<user_id>')
# @login_required
def get_user_info(user_id):
    user = User.query.get(user_id)

    return user.to_dict_friends()


@profile_routes.route("/<user_id>/friend/<friend_id>", methods=['PUT'])
@login_required
def accept_friend(user_id, friend_id):
    user = User.query.get(user_id)
    friend = User.query.get(friend_id)

    user.friends.append(friend)
    db.session.commit()

    return user.to_dict_friends()
