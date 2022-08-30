from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired

class UserEditForm(FlaskForm):
    username = StringField('username', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired()])
    profile_image_url = StringField('profile image')
