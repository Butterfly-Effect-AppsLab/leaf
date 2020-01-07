import {
    FETCH_MOCK_DATA_SUCCESS_C,
    FETCH_MOCK_DATA_FAIL_C,
} from "../actions";

const initialState = {};

const setCaseStudies = (state, caseStudies, idCompany) => {
  const newState = {
      ...state,
      [idCompany]: {
          ...state[idCompany],
          case_studies: caseStudies
      }
      };

  return newState;
}

export default function(state = initialState, action) {
  switch (action.type) {
      case FETCH_MOCK_DATA_SUCCESS_C: {
      
          const data = action.payload;
          const dataGroup = action.header.dataGroup
          
          if(dataGroup === 'caseStudies'){
              const caseStudies = data.case_studies;
              const idCompany = action.header.idCompany;
              return setCaseStudies(state, caseStudies, idCompany)
          }
          
          else if(dataGroup === 'companies'){
              const companies = data.companies;
              return companies;
          }

          break;
          }

      case FETCH_MOCK_DATA_FAIL_C:
          return state;
      
      default:
          return state;
  }
}
