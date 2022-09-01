from flask import Blueprint, request
from app.models import db, Deck, User
from flask_login import current_user, login_required
from ..forms import DeckForm


deck_routes = Blueprint('decks', __name__, url_prefix='/decks')


@deck_routes.route('')
@login_required
def get_all_decks():
    decks = Deck.query.all()

    return {
        'decks': [deck.to_dict() for deck in decks]
    }


@deck_routes.route('/<deck_id>')
@login_required
def single_deck(deck_id):
    deck = Deck.query.get(deck_id)

    if not deck:
        raise ReferenceError("404: Deck could not be found")

    if deck.user_id != current_user.id:
        raise AssertionError("Unauthorized: This isn't your deck to access")

    return deck.to_dict()


@deck_routes.route("", methods=['POST'])
@login_required
def create_a_deck():
    form = DeckForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        deck = Deck(
            user_id = form.data["user_id"],
            name = form.data["name"],
            spellcards = form.data["spellcards"]
        )

        db.session.add(deck)
        db.session.commit()

        return deck.to_dict()

    return 'Form did not validate!'


@deck_routes.route('/<deck_id>', methods=['PUT'])
def update_deck(deck_id):
    deck = Deck.query.get(deck_id)

    if not deck:
        raise ReferenceError("404: Deck could not be found")

    if deck.user_id != current_user.id:
        raise AssertionError("Unauthorized: This isn't your deck to edit")

    form = DeckForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        deck.user_id = form.data["user_id"]
        deck.name = form.data["name"]
        deck.spellcards = form.data["spellcards"]

        db.session.commit()

        return deck.to_dict()


@deck_routes.route('/<deck_id>', methods=['DELETE'])
def delete_deck(deck_id):
    deck = Deck.query.get(deck_id)

    if not deck:
        raise ReferenceError("404: Deck could not be found")

    if deck.user_id != current_user.id:
        raise AssertionError("Unauthorized: This isn't your deck to delete")

    db.session.delete(deck)
    db.session.commit()

    return "Successfully deleted"
