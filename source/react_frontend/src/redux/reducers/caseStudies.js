import {
    GET_CASE_STUDIES,
    GET_CASE_STUDY_INFO,
    GET_CASE_STUDY_STAGE
} from "../actions";

const initialState = {};

const setCaseStudyInfo = (state, caseStudyInfo) => {
    const newState = {
        ...state,
        [caseStudyInfo.id]: {
            ...state[caseStudyInfo.id],
            description: caseStudyInfo.description,
            motivation: caseStudyInfo.motivation,
            unique_value: caseStudyInfo.unique_value,
            revenue: caseStudyInfo.revenue,
            employees_num: caseStudyInfo.employees_num,
            stages: {}
        }
    };

    return newState;
};

const setCaseStudyStage = (state, action) => {
    const idCaseStudy = action.idList.idCaseStudy;
    const idStage = action.idList.idStage;
    const caseStudyStage = action.payload;


    const newState = {
        ...state,
        [idCaseStudy]: {
            ...state[idCaseStudy],
            stages: {
                ...state[idCaseStudy].stages, 
                [idStage]: caseStudyStage
            }
        }
    };

    return newState;
};

export default function(state = initialState, action) {

    switch (action.type) {

        case GET_CASE_STUDIES: {
            return action.payload
        }

        case GET_CASE_STUDY_INFO: {
            return setCaseStudyInfo(state, action.payload)
        }


        case GET_CASE_STUDY_STAGE: {
            return setCaseStudyStage(state, action)
        }

        default:
            return state;
    }
};
