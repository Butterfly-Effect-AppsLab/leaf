from sqlalchemy import (Column, String, Integer, Boolean, ForeignKey,
                        desc, UniqueConstraint, func, Table)
from sqlalchemy.event import listens_for
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from db_conn import connect


Base = declarative_base()


user_case_assoc = Table('user_case_assoc', Base.metadata,
                        Column('id_user', Integer, ForeignKey('users.id')),
                        Column('id_case', Integer, ForeignKey('case_studies.id')))

user_spec_assoc = Table('user_spec_assoc', Base.metadata,
                        Column('id_user', Integer, ForeignKey('users.id')),
                        Column('id_spec', Integer, ForeignKey('specializations.id')))

user_task_assoc = Table('user_task_assoc', Base.metadata,
                        Column('id_user', Integer, ForeignKey('users.id')),
                        Column('id_task', Integer, ForeignKey('tasks.id')))


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String(128), nullable=False)
    password = Column(String(64), nullable=False)

    # one to one
    profile = relationship("UserProfile", back_populates="user", uselist=False)
    # one to many
    projects = relationship("UserProject", back_populates="user")
    # many to many
    case_studies = relationship("CaseStudy", secondary=user_case_assoc, back_populates="users")
    # many to many
    specializations = relationship("Specialization", secondary=user_spec_assoc, back_populates="users")
    # many to many
    tasks = relationship("Task", secondary=user_task_assoc, back_populates="users")

    def __repr__(self):
        return f'<User(email="{self.email}", id="{self.id}")>'


class UserProfile(Base):
    __tablename__ = 'user_profiles'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_user = Column(Integer, ForeignKey('users.id'))
    name = Column(String)
    photo = Column(String)

    # one to one
    user = relationship("User", back_populates="profile", uselist=False)

    def __repr__(self):
        return f'<UserProfile(email="{self.name}", id_user="{self.id_user}", id="{self.id}")>'


class UserProject(Base):
    __tablename__ = 'user_projects'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_user = Column(Integer, ForeignKey('users.id'))
    id_project = Column(Integer, nullable=False)
    title = Column(String, nullable=False)
    description = Column(String, nullable=False)

    __table_args__ = (UniqueConstraint('id_user', 'id_project', name='_uc_id_project'),
                      UniqueConstraint('id_user', 'title', name='_uc_project_title'),)

    # many to one
    user = relationship("User", back_populates="projects")
    # one to many
    lean_canvas_parts = relationship("LeanCanvasPart", back_populates="project")

    def __repr__(self):
        return f'<UserProject(title="{self.title}", id_user="{self.id_user}", id_project="{self.id_project}")>'


class LeanCanvasStage(Base):
    __tablename__ = 'lean_canvas_stages'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    __table_args__ = (UniqueConstraint('name', name='_uc_lean_canvas_stage_name'),)

    # one to many
    questions = relationship("LeanCanvasQuestion", back_populates="lean_canvas_stage")
    # one to many
    case_studies = relationship("CaseStudy", back_populates="lean_canvas_stage")

    def __repr__(self):
        return f'<LeanCanvasStage(name="{self.name}", id="{self.id}")>'


class LeanCanvasQuestion(Base):
    __tablename__ = 'lean_canvas_questions'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_stage = Column(Integer, ForeignKey('lean_canvas_stages.id'))
    question_order = Column(Integer, nullable=False)
    text = Column(String, nullable=False)
    help = Column(String)

    __table_args__ = (UniqueConstraint('id_stage', 'question_order', name='_uc_stage_question'),
                      UniqueConstraint('text', name='_uc_text'),)

    # one to one
    lean_canvas_part = relationship("LeanCanvasPart", back_populates="questions", uselist=False)
    # many to one
    lean_canvas_stage = relationship("LeanCanvasStage", back_populates="questions")

    def __repr__(self):
        return f'<LeanCanvasQuestion(text="{self.text}", ' \
               f'id_stage="{self.id_stage}", question_order="{self.question_order}")>'


class LeanCanvasPart(Base):
    __tablename__ = 'lean_canvas_parts'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_project = Column(Integer, ForeignKey('user_projects.id'))
    id_lean_canvas_question = Column(Integer, ForeignKey('lean_canvas_questions.id'))
    text = Column(String, nullable=False)

    __table_args__ = (UniqueConstraint('id_project', 'id_lean_canvas_question', name='_uc_project_question'),)

    # one to one
    questions = relationship("LeanCanvasQuestion", back_populates="lean_canvas_part")
    # many to one
    project = relationship("UserProject", back_populates="lean_canvas_parts")

    def __repr__(self):
        return f'<LeanCanvasPart(id_lean_canvas_question="{self.id_lean_canvas_question}", ' \
               f'id_project="{self.id_project}")>'


class CaseStudy(Base):
    __tablename__ = 'case_studies'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_company = Column(Integer, ForeignKey('companies.id'), nullable=False)
    id_stage = Column(Integer, ForeignKey('lean_canvas_stages.id'), nullable=False)
    case_order = Column(Integer, nullable=False)
    question = Column(String, nullable=False)

    __table_args__ = (UniqueConstraint('id_company', 'id_stage', 'case_order', name='_uc_case_studies_name'),)

    # many to one
    company = relationship("Company", back_populates="case_studies")
    # many to one
    lean_canvas_stage = relationship("LeanCanvasStage", back_populates="case_studies")
    # many to one
    answers = relationship("CaseStudyAnswer", back_populates="case_study")
    # many to many
    users = relationship("User", secondary=user_case_assoc, back_populates="case_studies")

    def __repr__(self):
        return f'<CaseStudy(id_company="{self.id_company}", id_stage="{self.id_stage}")>'


class CaseStudyAnswer(Base):
    __tablename__ = 'case_study_answers'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_case = Column(Integer, ForeignKey('case_studies.id'), nullable=False)
    answer = Column(String, nullable=False)
    explanation = Column(String, nullable=False)
    is_right = Column(Boolean, nullable=False)

    __table_args__ = (UniqueConstraint('id_case', 'answer', name='_uc_case_study_answers_answer'),)

    # many to one
    case_study = relationship("CaseStudy", back_populates="answers")

    def __repr__(self):
        return f'<CaseStudy(answer="{self.answer}", explanation="{self.explanation}", is_right="{self.is_right}")>'


class Specialization(Base):
    __tablename__ = 'specializations'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_parent_specialization = Column(Integer, ForeignKey('specializations.id'))
    name = Column(String, nullable=False)

    __table_args__ = (UniqueConstraint('name', name='_uc_specializations_name'),)

    # one to many
    companies = relationship("Company", back_populates="specialization")
    # many to many
    users = relationship("User", secondary=user_spec_assoc, back_populates="specializations")

    def __repr__(self):
        return f'<Specialization(name="{self.name}", id_parent_specialization="{self.id_parent_specialization}")>'


class Company(Base):
    __tablename__ = 'companies'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(String)
    id_specialization = Column(Integer, ForeignKey('specializations.id'))

    __table_args__ = (UniqueConstraint('name', name='_uc_company_name'),)

    # many to one
    specialization = relationship("Specialization", back_populates="companies")
    # one to many
    case_studies = relationship("CaseStudy", back_populates="company")

    def __repr__(self):
        return f'<Specialization(name="{self.name}", id_specialization="{self.id_specialization}")>'


class ProjectPhase(Base):
    __tablename__ = 'project_phases'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)

    __table_args__ = (UniqueConstraint('name', name='_uc_project_phases_name'),)

    # one to many
    tasks = relationship("Task", back_populates="project_phase")

    def __repr__(self):
        return f'<LeanCanvasStage(name="{self.name}", id="{self.id}")>'


class Task(Base):
    __tablename__ = 'tasks'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_project_phase = Column(Integer, ForeignKey('project_phases.id'))
    task_order = Column(Integer, nullable=False)
    name = Column(String, nullable=False)
    in_progress = Column(Boolean, default=False)

    __table_args__ = (UniqueConstraint('name', name='_uc_tasks_name'),)

    # many to
    project_phase = relationship("ProjectPhase", back_populates="tasks")
    # many to many
    users = relationship("User", secondary=user_task_assoc, back_populates="tasks")

    def __repr__(self):
        return f'<LeanCanvasStage(name="{self.name}", id="{self.id}")>'


@listens_for(UserProject, 'before_insert')
def increment_id_project(mapper, connection, target):
    num = session.query(func.max(UserProject.id_project).label('max_id_project')).\
        filter(UserProject.id_user == target.id_user).first()

    target.id_project = (num.max_id_project + 1) if num.max_id_project else 1


if __name__ == '__main__':
    db = connect()

    Session = sessionmaker(db)
    session = Session()

    Base.metadata.create_all(db)

    # Create
    user_a = User(email='admin@admin.com', password='admin')
    session.add(user_a)
    session.commit()

    user_a_profile = UserProfile(id_user=user_a.id, name='Jozef')
    session.add(user_a_profile)
    session.commit()

    # listen(UserProject, "before_insert", UserProject.increment)

    # project = UserProject(id_user=5, title='project3', description='description1')
    # session.add(project)
    # session.commit()

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

    print('-----------users-----------------')
    # users = session.query(User).order_by(desc(User.id))
    users = session.query(User).order_by(desc(User.id))

    for user in users.filter(User.id == 5):
        print(user)
        print('\t' + user.profile.name)
        print('---his projects')
        for project in user.projects:
            print(project)

    print('-----------user_profiles-----------------')
    profiles = session.query(UserProfile)
    for profile in profiles:
        print(profile)
        print('\t' + profile.user.email)

    # Update
    # user_a.email = "admin@admin.sk"
    # session.commit()
