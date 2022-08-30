from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired

class DeckForm(FlaskForm):
    user_id = IntegerField("User_id", validators=[DataRequired()])
    name = StringField("Name", validators=[DataRequired()])
    spellcards= StringField("Spellcards")
