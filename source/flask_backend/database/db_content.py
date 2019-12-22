from source.flask_backend.database.db_models import *
from source.flask_backend.database.db_conn import connect


def set_content():
    specialization_a = Specialization(name='product')
    session.add(specialization_a)
    session.commit()

    specialization_b = Specialization(name='service')
    session.add(specialization_b)
    session.commit()

    for num in range(1, 15):
        company = Company(name='adidas' + str(num),
                          id_specialization=1,
                          description='svetoznama firma v oblasti sportu',
                          history='spolocnost vznikla ....',
                          unique_val_prop='je vynimocny...',
                          revenue=1000)
        session.add(company)
        session.commit()

    for num in range(1, 20):
        user = User(email='user@user.com', password='admin')
        session.add(user)
        session.commit()

    for num in range(1, 20):
        user_a_profile = UserProfile(id_user=num, name='Jozef' + str(num))
        session.add(user_a_profile)
        session.commit()

    for num in range(1, 20):
        for sub_num in range(1, 2):
            project = UserProject(id_user=num,
                                  title='project' + str(sub_num),
                                  description='description project' + str(sub_num))
            session.add(project)
            session.commit()


if __name__ == '__main__':
    db_conn = connect()

    Session = sessionmaker(db_conn)
    session = Session()
    set_content()

    # Delete
    # users = session.query(User)
    # for user in users:
    #     session.delete(user)
    #     session.commit()
    #
    # profiles = session.query(UserProfile)
    # for profile in profiles:
    #     session.delete(profile)
    #     session.commit()

    # print('-----------users-----------------')
    # # users = session.query(User).order_by(desc(User.id))
    # users = session.query(User).order_by(desc(User.id))
    #
    # for user in users.filter(User.id == 5):
    #     print(user)
    #     print('\t' + user.profile.name)
    #     print('---his projects')
    #     for project in user.projects:
    #         print(project)
    #
    # print('-----------user_profiles-----------------')
    # profiles = session.query(UserProfile)
    # for profile in profiles:
    #     print(profile)
    #     print('\t' + profile.user.email)

    # Update
    # user_a.email = "admin@admin.sk"
    # session.commit()
