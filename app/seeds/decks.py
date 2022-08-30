from app.models import db, Deck


def seed_decks():
    demo1 = Deck(
        user_id = 1,
        name = 'Ryze Level 5 Sorcerer',
        spellcards = '1,2,3,4,5'
    )
    demo2 = Deck(
        user_id = 2,
        name = 'Gandalf Level 15 Wizard',
        spellcards = '6,7,8,9,10'
    )
    demo3 = Deck(
        user_id = 3,
        name = 'Radagast Level 12 Wizard',
        spellcards = '11,12,13,14,15'
    )

    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)

    db.session.commit()
