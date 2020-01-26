import {
    GET_CASE_STUDIES,
    GET_CASE_STUDY_INFO,
    GET_CASE_STUDY_STAGE_QUESTIONS
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

const setCaseStudyStageQuestions = (state, action) => {
    const idCaseStudy = action.idList.idCaseStudy;
    const idStage = action.idList.idStage;
    const caseStudyStageQuestions = action.payload;

    const newState = {
        ...state,
        [idCaseStudy]: {
            ...state[idCaseStudy],
            stages: {
                ...state[idCaseStudy].stages, 
                [idStage]: caseStudyStageQuestions
            }
        }
    };

    console.log(newState);
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


        case GET_CASE_STUDY_STAGE_QUESTIONS: {
            return setCaseStudyStageQuestions(state, action)
        }

        default:
            return state;
    }
};
