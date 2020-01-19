const DOMAIN = "http://localhost:5000";


/* PUT */
export const API_USER = () => 
    DOMAIN + "/api/v1.0/user";

/*--------------------------------------------------------------------------*/

/* GET */
export const API_STAGES = () => 
    DOMAIN + "/api/v1.0/stages";

/*--------------------------------------------------------------------------*/

/* GET */
export const API_COMPANIES = () => 
    DOMAIN + "/api/v1.0/companies";

/* GET */
export const API_CASE_STUDIES = () => 
    DOMAIN + "/api/v1.0/case-studies";

/* GET */
export const API_CASE_STUDY_INFO = (idCaseStudy) => 
    DOMAIN + "/api/v1.0/case-study/" + idCaseStudy;

/* GET */
export const API_COMPANY_CASE_STUDIES = (idCompany) => 
    DOMAIN + "/api/v1.0/company/" + idCompany + "/case-studies";

/* GET */
export const API_CASE_STUDY_QUESTIONS = (idCaseStudy) => 
    DOMAIN + "/api/v1.0/case-study/" + idCaseStudy + "/questions";

/* GET */
export const API_QUESTION_ANSWERS = (idQuestion) => 
    DOMAIN + "/api/v1.0/question/" + idQuestion + "/answers";

/* GET, PUT */
export const API_QUESTION_USER_ANSWER = (idQuestion) => 
    DOMAIN + "/api/v1.0/question/" + idQuestion + "/answer";

/*--------------------------------------------------------------------------*/

/* GET, POST */
export const API_PROJECTS = () => 
    DOMAIN + "/api/v1.0/projects";

/* PATCH */
export const API_PROJECT = (idProject) => 
    DOMAIN + "/api/v1.0/project/" + idProject;

/* GET */
export const API_PROJECT_QUESTIONS = (idStage) => 
    DOMAIN + "/api/v1.0/project-stage-questions/" + idStage;

/* GET, PATCH */
export const API_PROJECT_ANSWER = (idProject, idAnswer) => 
    DOMAIN + "/api/v1.0/project/" + idProject + "/answer/" + idAnswer;
