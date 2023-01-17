from flask_wtf import FlaskForm
from wtforms import IntegerField, BooleanField
from wtforms.validators import DataRequired

class FriendForm(FlaskForm):
    from_user_id = IntegerField("from_user_id", validators=[DataRequired()])
    to_user_id = IntegerField("to_user_id", validators=[DataRequired()])
    accepted = BooleanField("accepted")
