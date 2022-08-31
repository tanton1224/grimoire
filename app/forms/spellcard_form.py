from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, ValidationError



class SpellcardForm(FlaskForm):
    name = StringField("Name")
    description = StringField("Description")
    image_url = StringField("Image Url")
    level = IntegerField("Level")
    range = StringField("Range")
    verbal = BooleanField("Verbal")
    somatic = BooleanField("Somatic")
    material = StringField("Material")
    ritual = BooleanField("Ritual")
    duration = StringField("Duration")
    concentration = BooleanField("Doncentration")
    casting_time = StringField("Casting Time")
    school = StringField("School")
    classes = StringField("Classes")
    homebrew = BooleanField("Name")
    user_id = IntegerField("User ID")
