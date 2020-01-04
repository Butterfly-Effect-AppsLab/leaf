from flask import request, abort, jsonify, Flask, render_template
from sqlalchemy.orm import sessionmaker
from source.flask_backend.database.db_conn import connect
from source.flask_backend.database.db_models import (Company, UserProject, CaseStudy,
                                                     ProjectAnswer, ProjectQuestion)
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
    companies_json = {'companies': {}}
    for company in companies_data:
        company_attrs = {
            'company_name': company.name,
            'specialization': company.id_specialization
        }
        companies_json['companies'][company.id] = company_attrs

    return jsonify(companies_json)


@app.route('/api/v1.0/company/<int:id_company>/case-studies/', methods=['GET'])
def get_case_studies(id_company):
    company_case_studies = session.query(CaseStudy).filter(CaseStudy.id_company == id_company)
    case_studies = {'case_studies': {}}
    for case_study in company_case_studies:
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
    project = request.json
    if not project:
        abort(400)
    if 'name' not in project:
        abort(400)
    if 'description' not in project:
        abort(400)
    if 'specialization' not in project:
        abort(400)

    new_project = UserProject(id_user=id_user,
                              name=project['name'],
                              description=project['description'],
                              specialization=project['specialization'])
    session.add(new_project)
    session.commit()

    id_questions = session.query(ProjectQuestion.id)
    for question in id_questions:
        answer = ProjectAnswer(id_project=new_project.id,
                               id_question=question.id,
                               answer='')
        session.add(answer)
        session.commit()

    return jsonify({'id_project': new_project.id})


if __name__ == '__main__':
    app.run(debug=True)
