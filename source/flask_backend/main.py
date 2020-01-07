from flask import request, abort, jsonify, Flask, render_template, make_response
from sqlalchemy.orm import sessionmaker
from database.db_conn import connect
from database.db_models import (Company, UserProject, CaseStudy, ProjectAnswer, ProjectQuestion)

# from flask_login import login_required

app = Flask("__main__")
db_conn = connect()
Session = sessionmaker(db_conn)
session = Session()


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html", token=path)


@app.route('/api/v1.0/companies/', methods=['GET'])
def get_companies():
    companies_data = session.query(Company)
    companies = {'companies': {}}
    for company in companies_data:
        company_attrs = {
            'company_name': company.name,
            'specialization': company.id_specialization
        }
        companies['companies'][company.id] = company_attrs

    return jsonify(companies)


@app.route('/api/v1.0/company/<int:id_company>/case-studies/', methods=['GET'])
def get_case_studies(id_company):
    case_studies_data = session.query(CaseStudy).filter(CaseStudy.id_company == id_company)
    case_studies = {'case_studies': {}}
    for case_study in case_studies_data:
        case_study_attrs = {
                'id': case_study.id,
                'id_company': case_study.id_company,
                'name': case_study.name,
                'description': case_study.description,
                'motivation': case_study.motivation,
                'unique_value': case_study.unique_value,
                'revenue': case_study.revenue,
                'employees_num': case_study.employees_num
        }
        case_studies['case_studies'][case_study.id] = case_study_attrs
    return jsonify(case_studies)


@app.route('/api/v1.0/user/<int:id_user>/projects/', methods=['GET'])
# @login_required
def get_user_projects(id_user):
    projects_data = session.query(UserProject).filter(UserProject.id_user == id_user)
    projects = {'user_projects': {}}
    for project in projects_data:
        project_attrs = {
            'id': project.id,
            'id_user': project.id_user,
            'title': project.name,
            'theme': project.theme,
            'description': project.description
        }
        projects['user_projects'][project.id] = project_attrs
    return jsonify(projects)


# https://restfulapi.net/http-status-codes/
@app.route('/api/v1.0/user/<int:id_user>/new-project/', methods=['POST'])
# @login_required
def set_new_project(id_user):
    post_data = request.json
    if not post_data:
        abort(400)
    if 'name' not in post_data:
        abort(400)
    if 'description' not in post_data:
        abort(400)
    if 'specialization' not in post_data:
        abort(400)

    new_project = UserProject(id_user=id_user,
                              name=post_data['name'],
                              description=post_data['description'],
                              specialization=post_data['specialization'])
    session.add(new_project)
    session.commit()

    id_questions = session.query(ProjectQuestion.id)
    for question in id_questions:
        answer = ProjectAnswer(id_project=new_project.id,
                               id_question=question.id,
                               answer='')
        session.add(answer)
        session.commit()

    return jsonify({'id_project': new_project.id}), 201


# https://restfulapi.net/http-status-codes/
@app.route('/api/v1.0/test-post/', methods=['POST'])
# @login_required
def test_post():
    print('..........', request)
    print(request.json)

    return make_response(jsonify({'test': 20202020}), 201)


@app.route('/api/v1.0/project-questions/', methods=['GET'])
# @login_required
def get_project_stage_questions():
    id_stage = request.args.get('stage', '')
    if not id_stage:
        abort(400)

    questions_data = session.query(ProjectQuestion).filter(ProjectQuestion.id_stage == id_stage)
    questions = {'questions': {}}
    for question in questions_data:
        question_attrs = {
            'id': question.id,
            'id_stage': question.id_stage,
            'question': question.question,
            'order': question.order,
            'help': question.help
        }
        questions['questions'][question.order] = question_attrs

    return jsonify(questions)


@app.route('/api/v1.0/user-project/<int:id_project>/answer/', methods=['GET'])
# @login_required
def get_project_answer(id_project):
    id_question = request.args.get('question', '')
    if not id_question:
        abort(400)

    answer_data = session.query(ProjectAnswer).filter(ProjectAnswer.id_question == id_question,
                                                      ProjectAnswer.id_project == id_project).one()

    answer = {'answer': {
        'id': answer_data.id,
        'id_project': answer_data.id_project,
        'id_question': answer_data.id_question,
        'answer': answer_data.answer,
        }
    }

    return jsonify(answer)


# https://restfulapi.net/http-methods/#patch
@app.route('/api/v1.0/user-project/<int:id_project>/answer/<int:id_answer>/', methods=['PATCH'])
# @login_required
def patch_project_answer(id_project, id_answer):
    patch_data = request.json
    if not patch_data:
        abort(400)
    if 'op' not in patch_data:
        abort(400)
    if 'value' not in patch_data:
        abort(400)

    project = session.query(ProjectAnswer).filter(ProjectAnswer.id == id_answer,
                                                  ProjectAnswer.id_project == id_project).one()

    if patch_data['op'] == 'update':
        project.answer = patch_data['value']
        session.commit()

        res = make_response(jsonify({"message": "Answer updated"}), 200)
        return res

    abort(400)


if __name__ == '__main__':
    app.run(debug=True)
