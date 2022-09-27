from email.policy import default
from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

friend_connections = db.Table(
    "friend_connections",
    db.Model.metadata,
    db.Column("from_user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("to_user_id", db.Integer, db.ForeignKey("users.id"), primary_key=True),
    db.Column("accepted", db.Boolean, default=False)
)

class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    profile_image_url = db.Column(db.String)

    decks = db.relationship('Deck', back_populates='user')
    spellcards = db.relationship('Spellcard', back_populates='user')
    friends = db.relationship("User", secondary=friend_connections,
                           primaryjoin=id==friend_connections.c.from_user_id,
                           secondaryjoin=id==friend_connections.c.to_user_id,
    )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'profile_image_url': self.profile_image_url,
            'decks': [deck.to_dict() for deck in self.decks],
            'spellcards': [spellcard.to_dict() for spellcard in self.spellcards],
        }
