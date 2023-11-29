import os
import crud
from dotenv import load_dotenv

from server import app
from model import connect_to_db, db, User
from crud import create_user

# drop db and create new to start from scratch
os.system("dropdb -U jamcam -e digdoo")
os.system("createdb -U jamcam -e digdoo")

# use context of flask app
with app.app_context():

    # connect to database
    connect_to_db(app)

    # create tables from model
    db.create_all()

    # import model classes and create entries here
    # store email for new first user in .env

    first_user = create_user(email=os.getenv('_fEMAIL'), is_developer=True)

    # commit 'all' changes
    db.session.commit()
    print('new database createded')