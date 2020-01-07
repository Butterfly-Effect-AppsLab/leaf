import {Route, withRouter} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FirmsPage from "./pages/FirmsPage";
import MyQuestionsPage from "./pages/MyQuestionsPage";
import FirmQuestionsPage from "./pages/FirmQuestionsPage";
import LcCategoriesPage from "./pages/LcCategoriesPage";
import ProjectInfoPage from './pages/ProjectInfoPage';
import Test_ReduxPage from './pages/Test_ReduxPage';
import React from "react";

const Routes = () => (
  <>
    <Route exact path={"/"} component={LoginPage} />
    <Route exact path={"/Otazky"} component={MyQuestionsPage} />
    <Route exact path={"/Firmy"} component={FirmsPage} />
    <Route exact path={"/LCFirma"} component={FirmQuestionsPage} />
    <Route exact path={"/LcKategorie"} component={LcCategoriesPage} />
    <Route exact path={"/ProjectInfo"} component={ProjectInfoPage} />
    <Route exact path={"/test_redux"} component={Test_ReduxPage} />
  </>
);
export default withRouter(Routes);