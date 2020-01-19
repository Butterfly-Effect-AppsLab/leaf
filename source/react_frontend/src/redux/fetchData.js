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
        
        const response = await fetch(props.url, header);
        const payload = await response.json();
        
        dispatch(fetchDataSuccess(payload, props.actionType));

    } catch (err) {
        
        console.log(err);
        //dispatch(fetckDataFail(header));
    }
};

export const fetchDataSuccess = (_actionType, _payload) => {
    return {
        actionType: _actionType,
        payload: _payload,
    }
};

export const fetckDataFail = (header) => {
    return false 
}
