
import {
    GET_PROJECTS,
    PATCH_PROJECT_NAME
} from "../actions";

const initialState = {};

const setProjectName = (state, idProject, name) => {
    const newState = {
        ...state,
        [idProject]: {
            ...state[idProject],
            name: name
        }
    };

    return newState;
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS: {
            return action.payload;
        }

        case PATCH_PROJECT_NAME: {
            return setProjectName(state, action.idProject, action.payload);
        }

        default:
            return state;
    };
};
