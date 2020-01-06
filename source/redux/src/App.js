import React from "react";
import { Router } from "react-router-dom";
import "./App.css";
import history from "./utils/history";
import Layout from "./components/Layout";
import Routes from "./routes";
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Layout history={history}>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
