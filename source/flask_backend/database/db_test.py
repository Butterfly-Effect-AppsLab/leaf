from database.db_models import *
from database.db_conn import connect

if __name__ == '__main__':
    db_conn = connect()

    Session = sessionmaker(db_conn)
    session = Session()

    id_user = 105
    user = session.query(User).filter(User.id == id_user).first()
    print(user)
    user = session.query(User).filter(User.id == id_user).one()
    print(user)
