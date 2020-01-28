
import {
    GET_PROJECTS,
    PATCH_PROJECT_NAME,
    GET_PROJECT_STAGE
} from "../actions";

const initialState = {};

const patchProjectName = (state, action) => {
    const idProject = action.idList.idProject;
    const name = action.payload;

    const newState = {
        ...state,
        [idProject]: {
            ...state[idProject],
            name: name
        }
    };

    return newState;
};


const setProjectStage = (state, action) => {
    const idProject = action.idList.idProject;
    const idStage = action.idList.idStage;
    const projectStage = action.payload;


    const newState = {
        ...state,
        [idProject]: {
            ...state[idProject],
            stages: {
                ...state[idProject].stages, 
                [idStage]: projectStage
            }
        }
    };

    return newState;
};


export default function(state = initialState, action) {

    switch (action.type) {
        case GET_PROJECTS: {
            console.log('payloaaad', action.payload);
            return action.payload;
        }

        case GET_PROJECT_STAGE: {
            return setProjectStage(state, action);
        }

        case PATCH_PROJECT_NAME: {
            return patchProjectName(state, action);
        }

        default:
            return state;
    };
};
