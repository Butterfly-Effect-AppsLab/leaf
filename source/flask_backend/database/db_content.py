from database.db_models import *
from database.db_conn import connect
from datetime import datetime


def set_content():
    specialization_a = Specialization(name='product')
    session.add(specialization_a)
    session.commit()

    specialization_b = Specialization(name='service')
    session.add(specialization_b)
    session.commit()

    for num in range(1, 15):
        company = Company(name='adidas' + str(num),
                          id_specialization=1)
        session.add(company)
        session.commit()

    for num in range(1, 3):
        company = CaseStudy(name='bezecke tenisky' + str(num),
                            id_company=1,
                            description='svetoznama firma v oblasti sportu',
                            motivation='bezci nemaju vhodnu obuv, ktora ....',
                            unique_value='je vynimocny...',
                            revenue=100*num,
                            employees_num=1*num
                          )
        session.add(company)
        session.commit()

    for num in range(1, 20):
        user = User(email='user@user.com', password='admin', created_at=datetime.now())
        session.add(user)
        session.commit()

    for num in range(1, 20):
        profile = UserProfile(id_user=num, name='Jozef' + str(num))
        session.add(profile)
        session.commit()

    for num in range(1, 20):
        for sub_num in range(1, 3):
            project = UserProject(id_user=num,
                                  name='project' + str(sub_num),
                                  description='description project' + str(sub_num),
                                  specialization='service')
            session.add(project)
            session.commit()

    stages = ["Partners", "Activities", "Resources", "Customer relationships",
              "Channels", "Value Proposition", "Customer segments", "Cost structure", "Revenue streams"]

    for num in range(len(stages)):
        question = BusinessModelStage(name=stages[num])
        session.add(question)
        session.commit()

    for num in range(1, 10):
        for sub_num in range(1, 4):
            question = ProjectQuestion(id_stage=num,
                                       question='stage' + str(num) + ' otazka' + str(sub_num),
                                       order=sub_num,
                                       help='v napovede ....')
            session.add(question)
            session.commit()

    id_questions = session.query(ProjectQuestion.id)
    id_project = 1
    for question in id_questions:
        new_project = ProjectAnswer(id_project=id_project, id_question=question.id, answer='')
        session.add(new_project)
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
