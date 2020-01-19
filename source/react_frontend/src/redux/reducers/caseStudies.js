import {
    GET_COMPANIES,
    GET_CASE_STUDIES,
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
            employees_num: caseStudyInfo.employees_num
        }
    };

    return newState;
};

export default function(state = initialState, action) {
    switch (action.type) {

        case GET_CASE_STUDIES: {
            return caseStudies
        }

        case GET_CASE_STUDY_INFO: {
            return setCaseStudyInfo(state, action.payload)
        }

        default:
            return state;
    }
};
