from app.models import spellcard
from .db import db, environment, SCHEMA, add_prefix_for_prod

class Deck(db.Model):
    __tablename__ = 'decks'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = db.Column(db.String, nullable=False)
    spellcards = db.Column(db.String)

    user = db.relationship("User", back_populates="decks")


    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'spellcards': (self.spellcards).split(',') if len(self.spellcards) > 0 else ''
        }
