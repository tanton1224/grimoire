from flask.cli import AppGroup
from .users import seed_users, undo_users
from .basic_spellcards import seed_basic_spellcards
from .decks import seed_decks
from .friends import seed_friends

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users();
    seed_basic_spellcards();
    seed_decks();
    seed_friends();
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
