import {
    FETCH_MOCK_DATA_SUCCESS_U,
    FETCH_MOCK_DATA_FAIL_U,
} from "../actions";

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOCK_DATA_SUCCESS_U: {
            const data = action.payload;
            const dataGroup = action.header.dataGroup
            
            if(dataGroup === 'user'){
                const user = data.user;
                return user;
            }

            break;
        }

        case FETCH_MOCK_DATA_FAIL_U:
            return state;

        default:
            return state;
    };
};
