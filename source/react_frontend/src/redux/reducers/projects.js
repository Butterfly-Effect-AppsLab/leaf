import {
    FETCH_MOCK_DATA_SUCCESS_P,
    FETCH_MOCK_DATA_FAIL_P,
    SET_PROJECT_THEME
} from "../actions";

const initialState = {};

const setProjectTheme = (state, idProject, theme) => {
    const newState = {
        ...state,
        [idProject]: {
            ...state[idProject],
            theme: theme
        }
    };

    return newState;
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOCK_DATA_SUCCESS_P: {
            const data = action.payload;
            const dataGroup = action.header.dataGroup
            
            if(dataGroup === 'projects'){
                const projects = data.projects;
                return projects;
            }

            break;
        }

        case FETCH_MOCK_DATA_FAIL_P:
            return state;

        case SET_PROJECT_THEME:
            const data = action.payload;
            const idProject = data.id;
            const theme = data.theme;
            return setProjectTheme(state, idProject, theme);
        
        default:
            return state;
    };
};
