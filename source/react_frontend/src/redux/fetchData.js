const setHeader = (requestMethod, brequestBodyody) => {
    return {
        method: requestMethod,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(brequestBodyody),
    };
};


// ---------------------------------------------------------------------


export const fetchData = (props) => async dispatch => {

    const header = props.hasHeader ? setHeader(props.requestMethod, props.requestBody) : undefined;

    try {
        
        const response = await fetch(props.apiUrl, header);
        const payload = await response.json();
        dispatch(fetchDataSuccess(props.type, payload));

    } catch (err) {
        console.log(err);
        dispatch(fetchDataFail());
    }
};


const fetchDataSuccess = (_type, _payload) => {
    return {
        type: _type,
        payload: _payload,
    }
};


const fetchDataFail = () => {
    return {
        type: 'FETCH_DATA_FAIL',
    }
}
// v pripade ze chceme pouzit pri chybovej hlaske data o chybe zo store-u
