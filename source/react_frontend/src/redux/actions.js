import * as API from "./urls";
import { fetchData } from './fetchData';

export const GET_USER = "GET_USER";
export const GET_STAGES = "GET_STAGES";

export const GET_COMPANIES = "GET_COMPANIES";
export const GET_COMPANY_CASE_STUDIES = "GET_COMPANY_CASE_STUDIES";
export const GET_CASE_STUDIES = "GET_CASE_STUDIES";
export const GET_CASE_STUDY_INFO = "GET_CASE_STUDIES";
export const GET_CASE_STUDY_QUESTIONS = "GET_CASE_STUDY_QUESTIONS";

export const GET_QUESTION_ANSWERS = "GET_QUESTION_ANSWERS";
export const GET_USER_ANSWER = "GET_QUESTION_ANSWERS";
export const PUT_USER_ANSWER = "GET_QUESTION_ANSWERS";

export const GET_PROJECTS = "GET_PROJECTS";
export const POST_PROJECT = "POST_PROJECTS";
export const PATCH_PROJECT_NAME = "PATCH_PROJECT_NAME";
export const PATCH_PROJECT_DESCRIPTION = "PATCH_PROJECT_DESCRIPTION";
export const PATCH_PROJECT_SPECIALIZATION = "PATCH_PROJECT_SPECIALIZATION";

export const GET_PROJECT_STAGE_QUESTIONS = "GET_PROJECT_STAGE_QUESTIONS";
export const GET_PROJECT_ANSWER = "GET_PROJECT_ANSWER";
export const PATCH_PROJECT_ANSWER = "PATCH_PROJECT_ANSWER";

// ----------------------------------------------------------------------

export const getStages = () => {
    fetchData({
        type: GET_STAGES,
        apiUrl: API.API_STAGES(),
        hasHeader: false
    });
};

export const getCompanies = () => {
    fetchData({
        type: GET_COMPANIES,
        apiUrl: API.API_COMPANIES(),
        hasHeader: false
    });
};

export const getCaseStudies = () => {
    fetchData({
        type: GET_CASE_STUDIES,
        apiUrl: API.API_CASE_STUDIES(),
        hasHeader: false
    });
};

export const getCaseStudyInfo = (idCaseStudy) => {
    fetchData({
        type: GET_CASE_STUDY_INFO,
        apiUrl: API.API_CASE_STUDY_INFO(idCaseStudy),
        hasHeader: false
    });
};

export const setProject = (props) => {
    fetchData({
        type: POST_PROJECT,
        apiUrl: API.API_PROJECTS(),
        hasHeader: true,
        requestBody: {
            name: props.projectName, 
            description: props.projectDescription, 
            specialization: props.projectSpecialization
        },
        requestMethod: 'POST'
    })
};

export const setProjectName = (props) => {
    fetchData({
        type: PATCH_PROJECT_NAME,
        apiUrl: API.API_PROJECT(props.idProject),
        hasHeader: true,
        requestBody: {
            op: 'update', 
            value: props.theme
        },
        requestMethod: 'PATCH'
    })
};
