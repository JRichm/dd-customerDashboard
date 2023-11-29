from flask import Flask
from flask_cors import CORS
from model import connect_to_db
import os
import json


app = Flask(__name__)
CORS(app)
app.secret_key = os.getenv('SECRET_KEY')


@app.route('/')
def index():
    return json.dumps({
        'name': {
            'key': 'value',
            '2': 'value,'
        }
    })


@app.route('/test')
def test():
    return json.dumps({
        'this is another test at the endpoint /test': 'test'
    })


if __name__ == '__main__':
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)