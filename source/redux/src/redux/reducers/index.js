import { combineReducers } from "redux";
import companies from "./companies";
import user from "./user";
import projects from "./projects";
//import React from "react";

export default combineReducers({ companies, user, projects });




/*
import {
    FETCH_MOCK_DATA_SUCCESS,
    FETCH_MOCK_DATA_FAIL,
    SET_PROJECT_THEME
} from "../actions";

const initialState = {
    user: {},
    projects: {},
    companies: {},
};

const setCaseStudies = (state, caseStudies, idCompany) => {
    const newState = {
        ...state,
        companies: {
            ...state.companies,
            [idCompany]: {
                ...state.companies[idCompany],
                case_studies: caseStudies
        }
        }
    };

    return newState;
}

const setProjects = (state, projects) => {
    const newState = {
        ...state,
        projects
    };

    return newState;
}

const setProjectTheme = (state, idProject, theme) => {
    const newState = {
        ...state,
        projects: {
            ...state.projects,
            [idProject]: {
                ...state.projects[idProject],
                theme: theme
            }
        }
    };

    return newState;
}

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_MOCK_DATA_SUCCESS: {
        
            const data = action.payload;
            const dataGroup = action.header.dataGroup
            
            if(dataGroup === 'user'){
                const user = data.user;
                return {...state, user};
            }

            else if(dataGroup === 'projects'){
                const projects = data.projects;
                return setProjects(state, projects)
            }

            else if(dataGroup === 'caseStudies'){
                const caseStudies = data.case_studies;
                const idCompany = action.header.idCompany;
                return setCaseStudies(state, caseStudies, idCompany)
            }
            
            else if(dataGroup === 'companies'){
                const companies = data.companies;
                return {...state, companies};
            }

            break;
            }

        case FETCH_MOCK_DATA_FAIL:
            return state;

        case SET_PROJECT_THEME:
            const data = action.payload;
            const idProject = data.id;
            const theme = data.theme;
            return setProjectTheme(state, idProject, theme);
        
        default:
            return state;
    }
  }
  */