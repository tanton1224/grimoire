from .db import db, environment, SCHEMA, add_prefix_for_prod

class Spellcard(db.Model):
    __tablename__ = 'spellcards'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.String, nullable=False)
    image_url = db.Column(db.String, nullable=False)
    level = db.Column(db.Integer, nullable=False)
    range = db.Column(db.String, nullable=False)
    verbal = db.Column(db.Boolean, default=False)
    somatic = db.Column(db.Boolean, default=False)
    material = db.Column(db.String, default='')
    ritual = db.Column(db.Boolean, default=False)
    duration = db.Column(db.String, nullable=False)
    concentration = db.Column(db.Boolean, default=False)
    casting_time = db.Column(db.String, nullable=False)
    school = db.Column(db.String, nullable=False)
    classes = db.Column(db.String, nullable=False)
    homebrew = db.Column(db.Boolean, default=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=True)

    user = db.relationship('User', back_populates='spellcards')


    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'image_url': self.image_url,
            'level': self.level,
            'range': self.range,
            'verbal': self.verbal,
            'somatic': self.somatic,
            'material': self.material,
            'ritual': self.ritual,
            'duration': self.duration,
            'concentration': self.concentration,
            'casting_time': self.casting_time,
            'school': self.school,
            'classes': [class_name.title() for class_name in (self.classes).split(',')],
            'homebrew': self.homebrew,
            'user_id': self.user_id,
        }
