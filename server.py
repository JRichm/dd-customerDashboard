from flask import Flask
from model import connect_to_db

app = Flask(__name__)

if __name__ == 'main':
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)