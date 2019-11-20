import React from 'react';
import {Router} from "react-router-dom";
import history from "./utils/history"; /*objekt, ktory drzi referenciu navstivenych URLs a vie poskytnut aktualnu URL*/
import Layout from "./components/Layout";
import Routes from "./Routes";


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
