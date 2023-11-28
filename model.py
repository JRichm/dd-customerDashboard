from flask_sqlalchemy import SQLAlchemy
import os
from dotenv import load_dotenv

load_dotenv()

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String, nullable=False)
    username = db.Column(db.String(20), nullable=False)
    full_name = db.Column(db.String(30), nullable=False)
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=True)
    last_login = db.Column(db.Date, nullable=True)
    provider = db.Column(db.String, nullable=False)
    provider_identifier = db.Column(db.String, nullable=False)
    is_moderator = db.Column(db.Boolean, default=False)

class Business(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(30), nullable=False)
    industry = db.Column(db.String(30), nullable=False)
    location = db.Column(db.String(50), nullable=False)
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=True)
    conversation_id = db.Column(db.Integer, db.ForeignKey('conversation.id'))

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    data = db.Column(db.String(255), nullable=False)
    from_user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    conversation_id = db.Column(db.Integer, db.ForeignKey('conversation.id'))
    previous_message_id = db.Column(db.Integer, db.ForeignKey('message.id'))
    created_at = db.Column(db.Date, nullable=False)

class Conversation(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    participants = db.Column(db.String, nullable=False)
    last_message_id = db.Column(db.Integer, db.ForeignKey('message.id'))
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=True)
    related_conversations = db.Column(db.String, nullable=True)

class StatusType(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    level = db.Column(db.String(12), nullable=False)

class TicketType(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    name = db.Column(db.String(20), nullable=False)

class UrgencyLevel(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    level = db.Column(db.String(12), nullable=False)

class Ticket(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    business_id = db.Column(db.Integer, db.ForeignKey('business.id'))
    ticket_type_id = db.Column(db.Integer, db.ForeignKey('ticket_type.id'))
    urgency_level_id = db.Column(db.Integer, db.ForeignKey('urgency_level.id'))
    status_id = db.Column(db.Integer, db.ForeignKey('status_type.id'))
    assigned_to_user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=True)

class URL(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    ticket_id = db.Column(db.Integer, db.ForeignKey('ticket.id'))
    created_at = db.Column(db.Date, nullable=False)

class LocalImage(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    ticket_id = db.Column(db.Integer, db.ForeignKey('ticket.id'))
    created_at = db.Column(db.Date, nullable=False)


def connect_to_db(flask_app):
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URI")
    db.app = flask_app
    db.init_app(flask_app)

    print('connected to db!')