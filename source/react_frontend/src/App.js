import {Router} from "react-router-dom";
import history from "./utils/history"; /*objekt, ktory drzi referenciu navstivenych URLs a vie poskytnut aktualnu URL*/
import Layout from "./components/Layout";
import Routes from "./Routes";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import React from "react";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#E17A47'
        },
        secondary: {
            main: '#EFCA59'
        },
        default: {
            main: '#F9FAFB',
        },
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
