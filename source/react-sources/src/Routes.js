import React from "react";
import { Route, withRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FirmsPage from "./pages/FirmsPage";
import MyQuestionsPage from "./pages/MyQuestionsPage";
import FirmQuestionsPage from "./pages/FirmQuestionsPage";
import LcCategoriesPage from "./pages/LcCategoriesPage";

const Routes = () => (
  <>
    <Route exact path={"/"} component={LoginPage} />
    <Route exact path={"/Otazky"} component={MyQuestionsPage} />
    <Route exact path={"/Firmy"} component={FirmsPage} />
    <Route exact path={"/LCFirma"} component={FirmQuestionsPage} />
    <Route exact path={"/LcKategorie"} component={LcCategoriesPage} />
  </>
);
export default withRouter(Routes);