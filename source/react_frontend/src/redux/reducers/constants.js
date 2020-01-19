import {
    GET_STAGES,
    GET_PROJECT_STAGE_QUESTIONS,
    FETCH_DATA_FAIL
} from "../actions";

const initialState = {};


export default function(state = initialState, action) {

    switch (action.type) {

        case GET_STAGES: {
            return {
                ...state,
                stages: action.payload
            }
        }

        case GET_PROJECT_STAGE_QUESTIONS: {
            return {
                ...state,
                project_questions: action.payload
            }
        }

        case FETCH_DATA_FAIL: {
            return state
        }

        default:
            return state;
    }
};
