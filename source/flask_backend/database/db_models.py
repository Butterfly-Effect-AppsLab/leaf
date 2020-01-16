from sqlalchemy import (Column, String, Integer, Boolean, DateTime, ForeignKey,
                        desc, UniqueConstraint, func, Table)
from sqlalchemy.event import listens_for
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from database.db_conn import connect


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
    email = Column(String, nullable=False)
    name = Column(String)
    id_google = Column(String)
    created_at = Column(DateTime, nullable=False)

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

    is_authenticated = True

    def __repr__(self):
        return f'<User(email="{self.email}", id="{self.id}")>'

    # def is_authenticated(self):
    #     return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.id_google


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
    name = Column(String, nullable=False)
    theme = Column(String, nullable=True)
    description = Column(String, nullable=False)
    specialization = Column(String, nullable=False)

    __table_args__ = (UniqueConstraint('id_user', 'id', name='_uc_id_project'),
                      UniqueConstraint('id_user', 'name', name='_uc_project_name'),)

    # many to one
    user = relationship("User", back_populates="projects")
    # one to many
    project_answers = relationship("ProjectAnswer", back_populates="project")

    def __repr__(self):
        return f'<UserProject(title="{self.name}", id_user="{self.id_user}", id_project="{self.id}")>'


class ProjectAnswer(Base):
    __tablename__ = 'project_answers'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_project = Column(Integer, ForeignKey('user_projects.id'))
    id_question = Column(Integer, ForeignKey('project_questions.id'))
    answer = Column(String, nullable=False)

    __table_args__ = (UniqueConstraint('id_project', 'id_question', name='_uc_project_question'),)

    # many to one
    question = relationship("ProjectQuestion", back_populates="answers")
    # many to one
    project = relationship("UserProject", back_populates="project_answers")

    def __repr__(self):
        return f'<ProjectAnswer(id_project_question="{self.id_question}", ' \
               f'id_project="{self.id_project}")>'


class ProjectQuestion(Base):
    __tablename__ = 'project_questions'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_stage = Column(Integer, ForeignKey('business_model_stages.id'))
    question = Column(String, nullable=False)
    order = Column(Integer, nullable=False)
    help = Column(String)

    __table_args__ = (UniqueConstraint('id_stage', 'order', name='_uc_stage_question'),
                      UniqueConstraint('question', name='_uc_text'),)

    # one to many
    answers = relationship("ProjectAnswer", back_populates="question")
    # many to one
    business_model_stage = relationship("BusinessModelStage", back_populates="project_questions")

    def __repr__(self):
        return f'<ProjectQuestion(question="{self.question}", id_stage="{self.id_stage}", order="{self.order}")>'


class BusinessModelStage(Base):
    __tablename__ = 'business_model_stages'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)

    __table_args__ = (UniqueConstraint('name', name='_uc_stage_name'),)

    # one to many
    project_questions = relationship("ProjectQuestion", back_populates="business_model_stage")
    # one to many
    case_study_questions = relationship("CaseStudyQuestion", back_populates="business_model_stage")

    def __repr__(self):
        return f'<BusinessModelStage(name="{self.name}", id="{self.id}")>'


class CaseStudy(Base):
    __tablename__ = 'case_studies'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_company = Column(Integer, ForeignKey('companies.id'), nullable=False)
    name = Column(String, nullable=False)
    description = Column(String)
    motivation = Column(String)
    unique_value = Column(String)
    revenue = Column(Integer)
    employees_num = Column(Integer)

    __table_args__ = (UniqueConstraint('id_company', 'name', name='_uc_company_case_name'),)

    # many to one
    company = relationship("Company", back_populates="case_studies")
    # one to many
    questions = relationship("CaseStudyQuestion", back_populates="case_study")
    # many to many
    users = relationship("User", secondary=user_case_assoc, back_populates="case_studies")

    def __repr__(self):
        return f'<CaseStudy(id_company="{self.id_company}", id_stage="{self.name}")>'


class CaseStudyQuestion(Base):
    __tablename__ = 'case_study_questions'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_case_study = Column(Integer, ForeignKey('case_studies.id'), nullable=False)
    id_stage = Column(Integer, ForeignKey('business_model_stages.id'), nullable=False)
    order = Column(Integer, nullable=False)
    question = Column(String, nullable=False)

    __table_args__ = (UniqueConstraint('id_case_study', 'id_stage', 'order', name='_uc_case_stage_order'),)

    # many to one
    business_model_stage = relationship("BusinessModelStage", back_populates="case_study_questions")
    # one to many
    answers = relationship("CaseStudyAnswer", back_populates="question")
    # many to one
    case_study = relationship("CaseStudy", back_populates="questions")

    def __repr__(self):
        return f'<CaseStudy(id_company="{self.id_case_study}", id_stage="{self.id_stage}")>'


class CaseStudyAnswer(Base):
    __tablename__ = 'case_study_answers'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_question = Column(Integer, ForeignKey('case_study_questions.id'), nullable=False)
    answer = Column(String, nullable=False)
    explanation = Column(String, nullable=False)
    is_right = Column(Boolean, nullable=False)

    __table_args__ = (UniqueConstraint('id_question', 'answer', name='_uc_case_study_answer'),)

    # many to one
    question = relationship("CaseStudyQuestion", back_populates="answers")

    def __repr__(self):
        return f'<CaseStudy(answer="{self.answer}", explanation="{self.explanation}", is_right="{self.is_right}")>'


class Specialization(Base):
    __tablename__ = 'specializations'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_parent = Column(Integer, ForeignKey('specializations.id'))
    name = Column(String, nullable=False)

    __table_args__ = (UniqueConstraint('name', name='_uc_specializations_name'),)

    # one to many
    companies = relationship("Company", back_populates="specialization")
    # many to many
    users = relationship("User", secondary=user_spec_assoc, back_populates="specializations")

    def __repr__(self):
        return f'<Specialization(name="{self.name}", id_parent="{self.id_parent}")>'


class Company(Base):
    __tablename__ = 'companies'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_specialization = Column(Integer, ForeignKey('specializations.id'))
    name = Column(String, nullable=False)

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
        return f'<ProjectPhase(name="{self.name}", id="{self.id}")>'


class Task(Base):
    __tablename__ = 'tasks'

    id = Column(Integer, primary_key=True, autoincrement=True)
    id_project_phase = Column(Integer, ForeignKey('project_phases.id'))
    order = Column(Integer, nullable=False)
    name = Column(String, nullable=False)
    in_progress = Column(Boolean, default=False)

    __table_args__ = (UniqueConstraint('name', name='_uc_tasks_name'),)

    # many to
    project_phase = relationship("ProjectPhase", back_populates="tasks")
    # many to many
    users = relationship("User", secondary=user_task_assoc, back_populates="tasks")

    def __repr__(self):
        return f'<Task(name="{self.name}", id="{self.id}")>'


# @listens_for(UserProject, 'before_insert')
# def increment_id_project(mapper, connection, target):
#     num = session.query(func.max(UserProject.id_project).label('max_id_project')).\
#         filter(UserProject.id_user == target.id_user).first()
#
#     target.id_project = (num.max_id_project + 1) if num.max_id_project else 1


if __name__ == '__main__':
    db_conn = connect()

    user_spec_assoc.drop(db_conn)
    user_task_assoc.drop(db_conn)
    user_case_assoc.drop(db_conn)

    Base.metadata.drop_all(bind=db_conn, tables=[
        UserProject.__table__,
        UserProfile.__table__,
        User.__table__,

        Specialization.__table__,
        Company.__table__,
        CaseStudyAnswer.__table__,
        CaseStudyQuestion.__table__,
        CaseStudy.__table__,

        ProjectAnswer.__table__,
        ProjectQuestion.__table__,
        BusinessModelStage.__table__,

        ProjectPhase.__table__,
        Task.__table__,
    ])

    Session = sessionmaker(db_conn)
    session = Session()

    Base.metadata.create_all(db_conn)
    # listen(UserProject, "before_insert", UserProject.increment)
