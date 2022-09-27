from app.models import db, User


def seed_friends():
    demo = User.query.filter(User.username == 'Demo').first()
    marnie = User.query.filter(User.username =='marnie').first()
    bobbie = User.query.filter(User.username == 'bobbie').first()

    demo.friends.append(marnie)
    demo.friends.append(bobbie)
    marnie.friends.append(demo)
    bobbie.friends.append(bobbie)

    db.session.commit()
