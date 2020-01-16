const DOMAIN = "http://localhost:5000";

/*--------------------------------------------------------------------------*/

/* GET */
export const API_STAGES = () => 
    DOMAIN + "/api/v1.0/stages/";

/*--------------------------------------------------------------------------*/

/* GET */
export const API_COMPANIES = () => 
    DOMAIN + "/api/v1.0/companies/";

/* GET */
export const API_CASE_STUDIES = (idCompany) => 
    DOMAIN + "/api/v1.0/company/" + idCompany + "/case-studies/";

/* GET */
export const API_CASE_STUDY_QUESTIONS = (idCaseStudy) => 
    DOMAIN + "/api/v1.0/case-study/" + idCaseStudy + "/questions/";

/* GET */
export const API_QUESTION_ANSWERS = (idQuestion) => 
    DOMAIN + "/api/v1.0/question/" + idQuestion + "/answers/";

/*--------------------------------------------------------------------------*/

/* GET, POST, PATCH */
export const API_PROJECTS = () => 
    DOMAIN + "/api/v1.0/projects/";

/* GET */
export const API_PROJECT_QUESTIONS = () => 
    DOMAIN + "/api/v1.0/project-questions";

/* GET, PATCH */
export const API_PROJECT_ANSWER = (idProject, idAnswer) => 
    DOMAIN + "/api/v1.0/project/" + idProject + "/answer/" + idAnswer + "/";
