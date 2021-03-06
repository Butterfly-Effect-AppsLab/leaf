const HOST = "http://localhost:5000";
const API_VERSION = "/api/v1.0";


/* PUT */
export const API_USER = () => HOST + API_VERSION + "user";

/*--------------------------------------------------------------------------*/

/* GET */
export const API_STAGES = () => 
    HOST + API_VERSION + "/stages";

/*--------------------------------------------------------------------------*/

/* GET */
export const API_COMPANIES = () => 
    HOST + API_VERSION + "/companies";

/* GET */
export const API_CASE_STUDIES = () => 
    HOST + API_VERSION + "/case-studies";

/* GET */
export const API_COMPANY_CASE_STUDIES = (idCompany) => 
    HOST + API_VERSION + "/company/" + idCompany + "/case-studies";

/* GET */
export const API_CASE_STUDY_INFO = (idCaseStudy) => 
    HOST + API_VERSION + "/case-study-info/" + idCaseStudy;

/* GET */
export const API_CASE_STUDY_STAGE = (idCaseStudy, idStage) => 
    HOST + API_VERSION + "/case-study/" + idCaseStudy + '/stage/'+ idStage;

/* GET */
export const API_CASE_STUDY_STAGE_QUESTIONS = (idCaseStudy, idStage) => 
    HOST + API_VERSION + "/case-study/" + idCaseStudy + '/stage/'+ idStage + "/questions";

/* GET */
export const API_QUESTION_CHOICES = (idQuestion) => 
    HOST + API_VERSION + "/question/" + idQuestion + "/choices";

/* GET, PUT, DELETE */
export const API_USER_CASE_STUDY_CHOICE = (idChoice) => 
    HOST + API_VERSION + "/user-case-study-choice/" + idChoice;   // ?? prerobit? - nasledne uprav v db

/* GET, PUT, DELETE */
export const API_USER_CASE_STUDY = (idCaseStudy) => 
    HOST + API_VERSION + "/user-case-study/" + idCaseStudy;  // ?? ako vyriesit get pre zoznam a put pre rozpracovany/hotovy

/*--------------------------------------------------------------------------*/

/* GET, POST */
export const API_PROJECTS = () => 
    HOST + API_VERSION + "/projects";

/* PATCH */ 
export const API_PROJECT = (idProject) => 
    HOST + API_VERSION + "/project/" + idProject;

/* GET */
export const API_PROJECT_STAGE = (idProject, idStage) => 
    HOST + API_VERSION + "/project/" + idProject + '/stage/'+ idStage;

/* GET */
export const API_PROJECT_QUESTIONS = (idStage) => 
    HOST + API_VERSION + "/project-stage-questions/" + idStage;


/* GET, PATCH */
export const API_PROJECT_ANSWER = (idProject, idAnswer) => 
    HOST + API_VERSION + "/project/" + idProject + "/answer/" + idAnswer;
