from app.models import db, Friend


def seed_friends():
    demo_to_marnie = Friend(
        from_user_id=1,
        to_user_id=2,
        accepted=True
    )
    bobbie_to_marnie = Friend(
        from_user_id=3,
        to_user_id=2,
        accepted=False
    )
    bobbie_to_demo = Friend(
        from_user_id=3,
        to_user_id=1,
        accepted=True
    )
    drew_to_demo = Friend(
        from_user_id=4,
        to_user_id=1,
        accepted=False
    )

    db.session.add(demo_to_marnie)
    db.session.add(bobbie_to_demo)
    db.session.add(bobbie_to_marnie)
    db.session.add(drew_to_demo)

    db.session.commit()
