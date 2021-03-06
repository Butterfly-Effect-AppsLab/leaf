import {Router} from "react-router-dom";
import history from "./utils/history"; /*objekt, ktory drzi referenciu navstivenych URLs a vie poskytnut aktualnu URL*/
import Layout from "./components/Layout";
import Routes from "./Routes";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import React from "react";
import {orange} from "./utils/colors";
import {yellow} from "./utils/colors";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: orange()
        },
        secondary: {
            main: yellow()
        }
    },
    typography: {
        fontFamily: "\"Sarabun\", sans-serif",
    }
});

function App() {

    return (
        <div className="App">
            <MuiThemeProvider theme={theme}>
                <Router history={history}>
                    <Layout history={history}>
                        <Routes/>
                    </Layout>
                </Router>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
