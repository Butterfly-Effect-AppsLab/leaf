import { API_COMPANIES } from "./urls";

export const FETCH_MOCK_DATA_SUCCESS_C = "FETCH_MOCK_DATA_SUCCESS_C";
export const FETCH_MOCK_DATA_FAIL_C = "FETCH_MOCK_DATA_FAIL_C";
export const FETCH_MOCK_DATA_SUCCESS_U = "FETCH_MOCK_DATA_SUCCESS_U";
export const FETCH_MOCK_DATA_FAIL_U = "FETCH_MOCK_DATA_FAIL_U";
export const FETCH_MOCK_DATA_SUCCESS_P = "FETCH_MOCK_DATA_SUCCESS_P";
export const FETCH_MOCK_DATA_FAIL_P = "FETCH_MOCK_DATA_FAIL_P";
export const SET_PROJECT_THEME = "SET_PROJECT_THEME";


export const GET_USER = "GET_USER";
export const GET_STAGES = "GET_STAGES";

export const GET_COMPANIES = "GET_COMPANIES";
export const GET_COMPANY_CASE_STUDIES = "GET_COMPANY_CASE_STUDIES";
export const GET_CASE_STUDIES = "GET_CASE_STUDIES";
export const GET_CASE_STUDY_QUESTIONS = "GET_CASE_STUDY_QUESTIONS";
export const GET_QUESTION_ANSWERS = "GET_QUESTION_ANSWERS";

export const GET_PROJECTS = "GET_PROJECTS";
export const UPDATE_PROJECT = "UPDATE_PROJECT";
export const ADD_PROJECT = "ADD_PROJECT";

export const GET_PROJECT_QUESTIONS = "GET_PROJECT_QUESTIONS";
export const GET_PROJECT_ANSWER = "GET_PROJECT_ANSWER";
export const UPDATE_PROJECT_ANSWER = "UPDATE_PROJECT_ANSWER";


export const getUser = (header) => {
    //zavolam fetch funckiu
    //ta zavola akciu success a nastavi typ akcie a obdrzane data pre reducer

    //ulozi sa do reduxu po fetch
};


const getSuccessActionType = (dataGroup) => {
    let actionType = null;
    if( ['companies', 'caseStudies'].includes(dataGroup) ) actionType = FETCH_MOCK_DATA_SUCCESS_C;
    else if ( ['user'].includes(dataGroup) ) actionType = FETCH_MOCK_DATA_SUCCESS_U;
    else if ( ['projects'].includes(dataGroup) ) actionType = FETCH_MOCK_DATA_SUCCESS_P;

    return actionType;
}

const getFailActionType = (dataGroup) => {
    let actionType = null;
    if( ['companies', 'caseStudies'].includes(dataGroup) ) actionType = FETCH_MOCK_DATA_FAIL_C;
    else if ( ['user'].includes(dataGroup) ) actionType = FETCH_MOCK_DATA_FAIL_U;
    else if ( ['projects'].includes(dataGroup) ) actionType = FETCH_MOCK_DATA_FAIL_P;

    return actionType;
}

/* --------------------------------------------------------------------------------------------*/


export const fetchData = (props) => async dispatch => {
    const header = undefined;
    if( props.hasHeader ){
        header = {
            method: props.method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(props.body),
        };
    }

    console.log(props);
    console.log(API_COMPANIES());
    try {
        const response = await fetch(API_COMPANIES(), header);
        //const response = await fetch(props.url, header);
        const json = await response.json();
        console.log(response);
        console.log(json);
        //dispatch(fetchDataSuccess(json, header));
    } catch (err) {
        console.log(err);
        //dispatch(fetchDataFail(header));
    }
};



/* --------------------------------------------------------------------------------------------*/

export const fetchMockData = (apiPath, header) => async dispatch => {
    try {
        //const response = await fetch("http://localhost:5000/api/v1.0/companies/");
        const response = await fetch("http://localhost:3000/" + apiPath);
        const json = await response.json();
        dispatch(fetchMockDataSuccess(json, header));
    } catch (err) {
        console.log(err);
        dispatch(fetchMockDataFail(header));
    }
};

export const fetchMockDataSuccess = (json, header) => {
    const type = getSuccessActionType(header.dataGroup);
    return({
        type: type,
        payload: json,
        header: header
})};

export const fetchMockDataFail = (header) => {
    const type = getFailActionType(header.dataGroup);
    return ({
    type: type
});
}

export const setProjectTheme = (data) => {
    return ({
        type: SET_PROJECT_THEME,
        payload: { 
            id: data.id,
            theme: data.theme
            }
    })
};
