const isEmpty = (obj) => {

    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}


export const getCompaniesState = store => store.companies;

export const getStore = store => store;

export const getUser = store => {
    const res = store.user.id == null ? null : store.user.id;
    return res;
}

export const getIdUser = store => 
    getUser(store) ? store.user.id : null;

export const getStages = store => {
    return isEmpty(store.constants.stages) ? null : store.constants.stages;
};

export const getCaseStudies = store => {
    return isEmpty(store.case_studies) ? null : store.case_studies;
};


export const getCaseStudyStage = (store, idCaseStudy, idStage) => {
    const stages = store.case_studies[idCaseStudy].stages;
    let questions = null;
    if( !isEmpty(stages) )
        questions = stages[idStage];
    return questions;
};
