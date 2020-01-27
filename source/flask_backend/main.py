from flask import (
    request,
    abort,
    jsonify,
    Flask,
    render_template,
    make_response,
    redirect,
    url_for
)
from sqlalchemy.orm import sessionmaker
from database.db_conn import connect
from database.db_models import (
    Company,
    UserProject,
    CaseStudy,
    ProjectAnswer,
    ProjectQuestion,
    BusinessModelStage,
    CaseStudyQuestion,
    QuestionChoice
)

from flask_login import (
    LoginManager,
    current_user,
    login_required,
    login_user,
    logout_user,
)

app = Flask("__main__")
app.url_map.strict_slashes = False
app.config['JSON_AS_ASCII'] = False
login_manager = LoginManager()
login_manager.init_app(app)
db_conn = connect()
Session = sessionmaker(db_conn)
session = Session()


@login_manager.unauthorized_handler
def unauthorized():
    return "You must be logged in to access this content.", 403


@login_manager.user_loader
def load_user(user_id):
    return session.query(User).filter(User.id_google == user_id).one()


@app.route('/api/v1.0/user', methods=['PUT'])
def authenticate_user():
    data = request.json
    print('authentication request', data)
    if not data.get("email_verified"):
        return make_response(jsonify({"message": "User email not available or not verified by Google."}), 400)

    id_google = data["sub"]
    user_email = data["email"]
    user_name = data["given_name"]

    try:
        user = session.query(User).filter(User.id_google == id_google).one()
        user.email = user_email
        user.name = user_name
    except exc.NoResultFound:
        user = User(id_google=id_google, name=user_name, email=user_email, created_at=datetime.now())
        session.add(user)
        session.commit()

    login_user(user)

    authenticated_user = {
        'user': {
            'id': user.id,
            'name': user.name
        }
    }

    return make_response(jsonify(authenticated_user), 200)


@app.route("/logout")
# @login_required
def logout():
    logout_user()
    return render_template("index.html")


# ///////////////////////////////////////////////////////


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html", token=path)
    # if current_user.is_authenticated:
    #     return render_template("index.html", token=path)
    # else:
    #     return render_template("index.html", token='Profil')


# https://restfulapi.net/http-status-codes/; https://restfulapi.net/http-methods/
@app.route('/api/v1.0/companies', methods=['GET'])
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


# @app.route('/api/v1.0/company/<int:id_company>/case-studies', methods=['GET'])
# def get_case_studies(id_company):
#     case_studies_data = session.query(CaseStudy).filter(CaseStudy.id_company == id_company)
#     case_studies = {'case_studies': {}}
#     for case_study in case_studies_data:
#         case_study_attrs = {
#                 'id': case_study.id,
#                 'id_company': case_study.id_company,
#                 'name': case_study.name,
#                 'description': case_study.description,
#                 'motivation': case_study.motivation,
#                 'unique_value': case_study.unique_value,
#                 'revenue': case_study.revenue,
#                 'employees_num': case_study.employees_num
#         }
#         case_studies['case_studies'][case_study.id] = case_study_attrs
#     return jsonify(case_studies)


# https://restfulapi.net/http-status-codes/; https://restfulapi.net/http-methods/
@app.route('/api/v1.0/case-studies', methods=['GET'])
def get_case_studies():
    print('request na case studies')
    case_studies_data = session.query(CaseStudy)
    case_studies = {}
    for case_study in case_studies_data:
        case_study_attrs = {
            'id': case_study.id,
            'id_company': case_study.id_company,
            'company_name': case_study.company.name,
            'name': case_study.name,
            'stages': {}
        }
        case_studies[case_study.id] = case_study_attrs
    return jsonify(case_studies)


# https://restfulapi.net/http-status-codes/; https://restfulapi.net/http-methods/
@app.route('/api/v1.0/case-study/<int:id_case_study>', methods=['GET'])
def get_case_study_info(id_case_study):
    case_study = session.query(CaseStudy).filter(CaseStudy.id == id_case_study).first()

    if not case_study:
        abort(400)

    case_study_info = {
        'id': case_study.id,
        'description': case_study.description,
        'motivation': case_study.motivation,
        'unique_value': case_study.unique_value,
        'revenue': case_study.revenue,
        'employees_num': case_study.employees_num
    }

    return make_response(jsonify(case_study_info), 200)

# https://restfulapi.net/http-status-codes/; https://restfulapi.net/http-methods/
@app.route('/api/v1.0/case-study/<int:id_case_study>/stage/<int:id_stage>', methods=['GET'])
def get_case_study_stage(id_case_study, id_stage):
    questions = session.query(CaseStudyQuestion).\
        filter(CaseStudyQuestion.id_case_study == id_case_study, CaseStudyQuestion.id_stage == id_stage)

    if not questions:
        abort(400)

    questions_attrs = {}

    for question in questions:
        choices = session.query(QuestionChoice).filter(QuestionChoice.id_question == question.id)
        choice_attrs = {}
        for choice in choices:
            choice_attrs[choice.id] = {
                'id': choice.id,
                'id_question': question.id,
                'choice_text': choice.choice_text,
                'is_correct': choice.is_correct,
                'explanation': choice.explanation,
            }

        questions_attrs[question.order] = {
            'id': question.id,
            'id_case_study': question.id_case_study,
            'id_stage': question.id_stage,
            'question_text': question.question,
            'order': question.order,
            'choices': choice_attrs
        }

    return make_response(jsonify(questions_attrs), 200)


# https://restfulapi.net/http-status-codes/; https://restfulapi.net/http-methods/
@app.route('/api/v1.0/stages', methods=['GET'])
# @login_required
def get_stages():
    stages_data = session.query(BusinessModelStage)
    stages = {}
    for stage in stages_data:
        stage_attrs = {
            'id': stage.id,
            'name': stage.name
        }
        stages[stage.id] = stage_attrs

    return jsonify(stages)


# https://restfulapi.net/http-status-codes/; https://restfulapi.net/http-methods/
@app.route('/api/v1.0/projects', methods=['GET'])
# @login_required
def get_user_projects():
    # get user object from flask.authenticated_user
    id_user = 10  # current_user.id
    projects_data = session.query(UserProject).filter(UserProject.id_user == id_user)
    projects = {}
    for project in projects_data:
        project_attrs = {
            'id': project.id,
            'id_user': project.id_user,
            'name': project.name,
            'theme': project.theme,
            'description': project.description
        }
        projects[project.id] = project_attrs
    return jsonify(projects)


# https://restfulapi.net/http-status-codes/; https://restfulapi.net/http-methods/
@app.route('/api/v1.0/project-stage-questions/<int:id_stage>', methods=['GET'])
# @login_required
def get_project_stage_questions(id_stage):
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


# https://restfulapi.net/http-status-codes/; https://restfulapi.net/http-methods/
@app.route('/api/v1.0/project/<int:id_project>/answer/<int:id_answer>', methods=['GET'])
# @login_required
def get_project_answer(id_project, id_answer):
    answer_data = session.query(ProjectAnswer).filter(ProjectAnswer.id == id_answer,
                                                      ProjectAnswer.id_project == id_project).first()

    if not answer_data:
        abort(400)

    answer = {'answer': {
        'id': answer_data.id,
        'id_project': answer_data.id_project,
        'id_question': answer_data.id_question,
        'answer': answer_data.answer,
        }
    }

    return jsonify(answer)


# https://restfulapi.net/http-status-codes/; https://restfulapi.net/http-methods/
@app.route('/api/v1.0/project/<int:id_project>/answer/<int:id_answer>', methods=['PATCH'])
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
                                                  ProjectAnswer.id_project == id_project).first()

    if not project:
        abort(400)

    if patch_data['op'] == 'update':
        project.answer = patch_data['value']
        session.commit()

        return make_response(jsonify({"message": "Answer updated"}), 200)

    abort(400)


# https://restfulapi.net/http-status-codes/; https://restfulapi.net/http-methods/
@app.route('/api/v1.0/projects', methods=['POST'])
# @login_required
def set_project():
    project_data = request.json
    if not post_data:
        abort(400)
    if 'name' not in project_data:
        abort(400)
    if 'description' not in project_data:
        abort(400)
    if 'specialization' not in project_data:
        abort(400)

    id_user = current_user.id

    project = UserProject(id_user=id_user,
                          name=project_data['name'],
                          description=project_data['description'],
                          specialization=project_data['specialization'])
    session.add(project)
    session.commit()

    id_questions = session.query(ProjectQuestion.id)
    for question in id_questions:
        answer = ProjectAnswer(id_project=project.id,
                               id_question=question.id,
                               answer='')
        session.add(answer)
        session.commit()

    return jsonify({'id_project': project.id}), 201


@app.route('/api/v1.0/test-post', methods=['POST'])
# @login_required
def test_post():
    print('..........', request)
    print(request.json)

    return make_response(jsonify({'test': 20202020}), 201)


if __name__ == '__main__':
    app.run(host='localhost', debug=True)
