from flask import Blueprint, request
from app.models import db, Spellcard, User
from ..forms import SpellcardForm
from flask_login import current_user, login_required


spellcard_routes = Blueprint("spellcards", __name__, url_prefix="/spellcards")


@spellcard_routes.route("")
def encyclopedia():
    encyclopedia = Spellcard.query.filter(Spellcard.homebrew == False).all()
    homebrew = Spellcard.query.filter(Spellcard.homebrew == True).all()

    return {
        "encyclopedia": [spellcard.to_dict() for spellcard in encyclopedia],
        "homebrew": [spellcard.to_dict() for spellcard in homebrew]
    }


@spellcard_routes.route("/<card_id>")
def single_card(card_id):
    card = Spellcard.query.get(card_id)

    if not card:
        raise ReferenceError("404: Card could not be found")

    if card.user_id != current_user.id:
        raise AssertionError("Unauthorized: This isn't your card to access")

    return card.to_dict()


@spellcard_routes.route('/<card_id>', methods=['PUT'])
@login_required
def edit_homebrew_card(card_id):
    card = Spellcard.query.get(card_id)

    if not card:
        raise ReferenceError("404: Spellcard could not be found")

    if card.user_id != current_user.id:
        raise AssertionError("Unauthorized: This isn't your card to edit")

    form = SpellcardForm()

    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        card.name = form.data["name"]
        card.description = form.data["description"]
        card.image_url = form.data["image_url"]
        card.level = form.data["level"]
        card.range = form.data["range"]
        card.verbal = form.data["verbal"]
        card.somatic = form.data["somatic"]
        card.material = form.data["material"]
        card.ritual = form.data["ritual"]
        card.duration = form.data["duration"]
        card.concentration = form.data["concentration"]
        card.casting_time = form.data["casting_time"]
        card.school = form.data["school"]
        card.classes = form.data["classes"]

        db.session.commit()

        return card.to_dict()


@spellcard_routes.route('', methods=['POST'])
@login_required
def create_spellcard():
    form = SpellcardForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        card = Spellcard(
            name = form.data["name"],
            description = form.data["description"],
            image_url = form.data["image_url"],
            level = form.data["level"],
            range = form.data["range"],
            verbal = form.data["verbal"],
            somatic = form.data["somatic"],
            material = form.data["material"],
            ritual = form.data["ritual"],
            duration = form.data["duration"],
            concentration = form.data["concentration"],
            casting_time = form.data["casting_time"],
            school = form.data["school"],
            classes = form.data["classes"],
            homebrew = form.data["homebrew"],
            user_id = form.data["user_id"]
        )

        db.session.add(card)
        db.session.commit()

        return card.to_dict()

    print("-- -- -- -- -- --")
    print("-- -- -- -- -- --")
    print("-- -- -- -- -- --")
    print("-- -- -- -- -- --")
    print(form.errors)
    return 'Form did not validate!'


@spellcard_routes.route("/<spell_id>", methods=['DELETE'])
@login_required
def delete_spellcard(spell_id):
    card = Spellcard.query.get(spell_id)

    if not card:
        raise ReferenceError("404: Spellcard could not be found")

    if card.user_id != current_user.id:
        raise AssertionError("Unauthorized: This isn't your card to delete")

    db.session.delete(card)
    db.session.commit()

    return "Successfully Deleted"
