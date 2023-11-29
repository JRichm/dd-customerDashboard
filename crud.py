from datetime import datetime
from model import User, db


def create_user(email, username=None, full_name=None, password_hash=None, provider=None, provider_identifier=None, is_developer=None, is_business_owner=None):
    new_user = User(
        email=email,
        username=username,
        full_name=full_name,
        password_hash=password_hash,
        created_at=datetime.now(),
        updated_at=datetime.now(),
        last_login=datetime.now(),
        provider=provider,
        provider_identifier=provider_identifier,
        is_developer=is_developer,
        is_business_owner=is_business_owner
    )

    db.session.add(new_user)
    db.session.commit()
    return new_user