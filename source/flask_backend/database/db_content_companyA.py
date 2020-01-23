from database.db_models import *
from database.db_conn import connect
from datetime import datetime


def set_case_study_question(_id_case_study, _id_stage, _order, _question):
    case_study_question = CaseStudyQuestion(id_case_study=_id_case_study,
                                            id_stage=_id_stage,
                                            order=_order,
                                            question=_question)
    session.add(case_study_question)
    session.commit()


def set_content():
    company = Company(name='',
                      id_specialization=1)  # 1 - product, 2 - service
    session.add(company)
    session.commit()

    case_study = CaseStudy(name='',
                           id_company=company.id,
                           description='',
                           motivation='',
                           unique_value='',
                           revenue=0,
                           employees_num=0
                           )
    session.add(case_study)
    session.commit()

    set_case_study_question(_id_case_study=case_study.id,
                            _id_stage=1,
                            _order=1,
                            _question='')

    set_case_study_question(_id_case_study=case_study.id,
                            _id_stage=1,
                            _order=2,
                            _question='')

    set_case_study_question(_id_case_study=case_study.id,
                            _id_stage=1,
                            _order=3,
                            _question='')

    set_case_study_question(_id_case_study=case_study.id,
                            _id_stage=2,
                            _order=1,
                            _question='')


if __name__ == '__main__':
    db_conn = connect()

    Session = sessionmaker(db_conn)
    session = Session()
    set_content()
