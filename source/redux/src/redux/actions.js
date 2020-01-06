export const FETCH_MOCK_DATA_SUCCESS_C = "FETCH_MOCK_DATA_SUCCESS_C";
export const FETCH_MOCK_DATA_FAIL_C = "FETCH_MOCK_DATA_FAIL_C";
export const FETCH_MOCK_DATA_SUCCESS_U = "FETCH_MOCK_DATA_SUCCESS_U";
export const FETCH_MOCK_DATA_FAIL_U = "FETCH_MOCK_DATA_FAIL_U";
export const FETCH_MOCK_DATA_SUCCESS_P = "FETCH_MOCK_DATA_SUCCESS_P";
export const FETCH_MOCK_DATA_FAIL_P = "FETCH_MOCK_DATA_FAIL_P";
export const SET_PROJECT_THEME = "SET_PROJECT_THEME";

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
