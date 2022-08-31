from flask import Blueprint, request
from app.models import db, Spellcard, User


spellcard_routes = Blueprint("spellcards", __name__, url_prefix="/spellcards")


@spellcard_routes.route("/encylopedia")
def encylcopedia():
    spellcards = Spellcard.query.filter(Spellcard.homebrew == False).all()

    return {
        "spellcards": [spellcard.to_dict() for spellcard in spellcards]
    }
