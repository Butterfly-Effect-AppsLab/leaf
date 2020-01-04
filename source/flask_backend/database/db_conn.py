from sqlalchemy import create_engine


def connect():
    db_string = "postgres://admin:admin@localhost/growie_app"
    return create_engine(db_string)
