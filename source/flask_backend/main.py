import flask
from sqlalchemy.orm import sessionmaker
from source.flask_backend.database.db_conn import connect
from source.flask_backend.database.db_models import UserProject, Company
import json
# from flask_login import login_required

app = flask.Flask("__main__")
db_conn = connect()
Session = sessionmaker(db_conn)
session = Session()


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return flask.render_template("index.html", token=path)


@app.route('/api/v1.0/companies/', methods=['GET'])
def get_companies():
    companies_data = session.query(Company)
    companies_json = {'companies': []}
    for company in companies_data:
        company_info = {
            'company_id': company.id,
            'company_name': company.name,
            'specialization': company.id_specialization
        }
        companies_json['companies'].append(company_info)
    return json.dumps(companies_json)


@app.route('/api/v1.0/companies/<int:id_company>', methods=['GET'])
def get_company_info(id_company):
    company_data = session.query(Company).filter(Company.id == id_company)
    company_info = {}
    for company in company_data:
        company_info = {
            'description': company.description,
            'story_behind': company.history,
            'unique_val_prop': company.unique_val_prop,
            'revenue': company.revenue
        }
    return json.dumps(company_info)


@app.route('/api/v1.0/user_projects/<int:id_user>', methods=['GET'])
# @login_required
def get_user_projects(id_user):
    projects_data = session.query(UserProject).filter(UserProject.id_user == id_user)
    projects_info_json = {'user_projects': []}
    for project in projects_data:
        project_info = {
            'id': project.id,
            'id_user': project.id_user,
            'title': project.title,
            'description': project.description
        }
        projects_info_json['user_projects'].append(project_info)
    return json.dumps(projects_info_json)


if __name__ == '__main__':
    app.run(debug=True)
