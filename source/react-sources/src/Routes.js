import React from "react";
import { Route, withRouter } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import FirmsPage from "./pages/FirmsPage";
import MyQuestionsPage from "./pages/MyQuestionsPage";

const Routes = () => (
  <>
    <Route exact path={"/Login"} component={LoginPage} />
    <Route exact path={"/Otazky"} component={MyQuestionsPage} />
    <Route exact path={"/Firmy"} component={FirmsPage} />
  </>
);
export default withRouter(Routes);