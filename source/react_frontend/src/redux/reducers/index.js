import { combineReducers } from "redux";
import caseStudies from "./caseStudies";
import user from "./user";
import projects from "./projects";
import constants from "./constants";

export default combineReducers({ 
    user: user,
    case_studies: caseStudies, 
    projects: projects, 
    constants: constants 
});
