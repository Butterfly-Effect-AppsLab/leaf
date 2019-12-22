import flask
from sqlalchemy.orm import sessionmaker
from source.flask_backend.database.db_conn import connect
from source.flask_backend.database.db_models import Company
import json

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
        company_json = {
            'company_id': company.id,
            'company_name': company.name,
            'specialization': company.id_specialization
        }
        companies_json['companies'].append(company_json)
    return json.dumps(companies_json)


@app.route('/api/v1.0/companies/<int:company_id>', methods=['GET'])
def get_company_info(company_id):
    company_data = session.query(Company).filter(Company.id == company_id)
    company_info_json = {}
    for company in company_data:
        company_info_json = {
            'description': company.description,
            'story_behind': company.history,
            'unique_val_prop': company.unique_val_prop,
            'revenue': company.revenue
        }
    return json.dumps(company_info_json)


if __name__ == '__main__':
    app.run(debug=True)
