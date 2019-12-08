import { Route, withRouter } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SettingsPage from "./pages/SettingsPage";
import FirmyPage from "./pages/FirmyPage";
import React from "react";

const Routes = () => (
  <>
    <Route exact path={"/"} component={MainPage} />
    <Route exact path={"/Settings"} component={SettingsPage} />
    <Route exact path={"/Firmy"} component={FirmyPage} />
  </>
);
export default withRouter(Routes);