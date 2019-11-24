import React from 'react';
import {Router} from "react-router-dom";
import history from "./utils/history"; /*objekt, ktory drzi referenciu navstivenych URLs a vie poskytnut aktualnu URL*/
import Layout from "./components/Layout";
import Routes from "./Routes";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import yellow from "@material-ui/core/colors/yellow"

const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: yellow,
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
