import { combineReducers } from "redux";
import companies from "./companies";
import user from "./user";
import projects from "./projects";
//import React from "react";

export default combineReducers({ companies, user, projects });
