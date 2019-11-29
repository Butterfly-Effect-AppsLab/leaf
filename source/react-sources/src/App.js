import React from 'react';
import {Router} from "react-router-dom";
import history from "./utils/history"; /*objekt, ktory drzi referenciu navstivenych URLs a vie poskytnut aktualnu URL*/
import Layout from "./components/Layout";
import Routes from "./Routes";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/blue";

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: blue,
    }
});

function App() {
  return (
    <div className="App">
        <MuiThemeProvider theme={theme}>
          <Router history={history}>
            <Layout history={history}>
              <Routes />
            </Layout>
          </Router>
        </MuiThemeProvider>
    </div>
  );
}

export default App;
