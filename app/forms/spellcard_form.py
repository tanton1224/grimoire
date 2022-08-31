from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, BooleanField
from wtforms.validators import DataRequired, NumberRange



class SpellcardForm(FlaskForm):
    name = StringField("name", validators=[DataRequired()])
    description = StringField("description", validators=[DataRequired()])
    image_url = StringField("image_url", validators=[DataRequired()])
    level = IntegerField("level", validators=[NumberRange(min=0, max=9, message='Level not in valid range')])
    range = StringField("range", validators=[DataRequired()])
    verbal = BooleanField("verbal")
    somatic = BooleanField("somatic")
    material = StringField("material")
    ritual = BooleanField("ritual")
    duration = StringField("duration", validators=[DataRequired()])
    concentration = BooleanField("concentration")
    casting_time = StringField("casting_time", validators=[DataRequired()])
    school = StringField("school", validators=[DataRequired()])
    classes = StringField("classes", validators=[DataRequired()])
    homebrew = BooleanField("name")
    user_id = IntegerField("user_id")
