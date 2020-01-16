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

    try {
        const response = await fetch(props.url, header=undefined);
        const json = await response.json();
        console.log(response);
        console.log(json);
        //dispatch(fetchDataSuccess(json, header));
    } catch (err) {
        console.log(err);
        //dispatch(fetchDataFail(header));
    }
};