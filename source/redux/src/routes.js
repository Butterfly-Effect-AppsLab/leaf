import { Route, withRouter } from "react-router-dom";

import MainPage from "./pages/MainPage";
import SettingsPage from "./pages/SettingsPage";
import React from "react";

const Routes = () => (
  <>
    <Route exact path={"/"} component={MainPage} />
    <Route exact path={"/settings"} component={SettingsPage} />
  </>
);

export default withRouter(Routes);
