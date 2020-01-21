import {Route, withRouter} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FirmsPage from "./pages/FirmsPage";
import MyQuestionsPage from "./pages/MyQuestionsPage";
import CompanyQuestionsPage from "./pages/CompanyQuestionsPage";
import LcCategoriesPage from "./pages/LcCategoriesPage";
import ProjectInfoPage from './pages/ProjectInfoPage';
import Test_ReduxPage from './pages/Test_ReduxPage';
import React from "react";
import OnboardingPage from "./pages/OnboardingPage";
import ProfilePage from "./pages/ProfilePage";
import ToDoPage from "./pages/ToDoPage";
import CaseStudyInfoPage from "./pages/CaseStudyInfoPage";

const Routes = () => (
  <>
    <Route exact path={"/"} component={LoginPage} />
    <Route exact path={"/Otazky"} component={MyQuestionsPage} />
    <Route exact path={"/Firmy"} component={FirmsPage} />
    <Route exact path={"/LCFirma"} component={CompanyQuestionsPage} />
    <Route exact path={"/LcKategorie"} component={LcCategoriesPage} />
    <Route exact path={"/ProjectInfo"} component={ProjectInfoPage} />
    <Route exact path={"/Onboarding"} component={OnboardingPage} />
    <Route exact path={"/Profil"} component={ProfilePage} />
    <Route exact path={"/ToDo"} component={ToDoPage} />
    <Route exact path={"/FirmaInfo"} component={CaseStudyInfoPage} />
    <Route exact path={"/test_redux"} component={Test_ReduxPage} />
  </>
);
export default withRouter(Routes);