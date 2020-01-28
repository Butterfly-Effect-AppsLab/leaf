import pyexcel as p
import pprint
import os
from database.db_conn import connect
from database.db_models import (BusinessModelStage,
                                CaseStudyQuestion,
                                CaseStudy,
                                QuestionChoice,
                                Company)
from sqlalchemy.orm import sessionmaker


db_conn = connect()
Session = sessionmaker(db_conn)
session = Session()


def all_empty(items):
    return all(x == items[0] for x in items)


def insert_records(_records):
    res = []
    data = {}
    order_question = 1
    order_choice = 1
    for row in _records:
        if all_empty(row):
            if data:
                res.append(data)
            data = {}
            order_choice = 1
            continue

        if row[0] == 'END OF SHEET':
            break

        if row[0]:
            data[f'question_{order_question}'] = row[0]
            order_question += 1

        else:
            data[f'choice_{order_choice}'] = {
                'choice_text': row[1],
                'choice_is_correct': str(row[2]).lower(),
                'explanation': row[3]
            }
            order_choice += 1

    res.append(data)
    return res


def insert_case_study(id_case_study, id_stage, _records):
    order_question = 1
    order_choice = 1
    question = None
    for row in _records:
        if all_empty(row):
            order_choice = 1
            continue

        elif row[0] == 'END OF SHEET':
            break

        elif row[0]:
            question = CaseStudyQuestion(id_case_study=id_case_study,
                                         id_stage=id_stage,
                                         order=order_question,
                                         question=row[0])
            session.add(question)
            session.commit()
            order_question += 1

        else:
            explanation = row[3] if 3 < len(row) else ''
            choice = QuestionChoice(id_question=question.id,
                                    choice_text=row[1],
                                    explanation=explanation,
                                    is_correct=row[2]
                                    )
            session.add(choice)
            session.commit()
            order_choice += 1


for file in os.listdir("content"):
    header = p.get_sheet(file_name=f'content/{file}', sheet_name='Header')
    case_study = None

    for item in header:
        print(item[0])
        if item[0] == 'NAME':
            company = Company(id_specialization=1, name=item[1])
            session.add(company)
            session.commit()
            case_study = CaseStudy(id_company=company.id, name=company.name)
        elif item[0] == 'EMPLOYEES_NUM' and case_study:
            case_study.employees_num = int(item[1])
        elif item[0] == 'REVENUES':
            case_study.revenue = int(item[1])
        elif item[0] == 'DESCRIPTION':
            case_study.description = item[1]
        elif item[0] == 'MOTIVATION':
            case_study.motivation = item[1]
        elif item[0] == 'UNIQUE_VALUE':
            case_study.unique_value = item[1]
        elif item[0] == 'TYPE':
            case_study.type = item[1]
        else:
            break

    session.add(case_study)
    session.commit()

    stages = session.query(BusinessModelStage)

    for stage in stages:
        records = p.get_sheet(file_name=f'content/{file}', sheet_name=stage.name)
        insert_case_study(case_study.id, stage.id, records)
