import React from "react";
//import TodoApp from "../components/Todos/TodoApp";
import { fetchMockData, setProjectTheme } from "../redux/actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getStore, getIdUser } from "../redux/selectors";


const getUser = (fetchData, state) => () => {
  const header = {
    dataGroup: 'user'
  };

  fetchData("mock_user.json", header);
};


const getCompanies = fetchData => () => {
  const header = {
    dataGroup: 'companies'
  };

  fetchData("mock_companies.json", header);
};


const getCaseStudies = fetchData => () => {
  const header = {
    dataGroup: 'caseStudies',
    idCompany: 1
  };          

  fetchData("mock_case_studies.json", header);
};


const getProjects = ( fetchData, id ) => () => {
  const header = {
    dataGroup: 'projects',
    idUser: id
  };          

  fetchData("mock_projects.json", header);
};


const setTheme = ( setProjectTheme, dispatch ) => () => {
  const data = {id: '19', theme: 'nova tema'};
  dispatch(setProjectTheme(data));
};


const MainPage = (props) => {
  const data = props.data; 
  const fetchMockData = props.fetchMockData; 
  const setProjectTheme = props.setProjectTheme;
  console.log('================================')
  const store = data.store;
  console.log('newState: ', store);
  const idUser = data.idUser;
  return (
    <div>
      <button onClick={getUser(fetchMockData)}>
        Login
      </button>
      <button onClick={getCompanies(fetchMockData)}>
        Get companies
      </button>
      <button onClick={getCaseStudies(fetchMockData)}>
        Get company case study
      </button>
      <button onClick={getProjects(fetchMockData, idUser)}>
        Get user projects
      </button>
      <button onClick={setTheme(setProjectTheme, props.dispatch)}>
        Set project theme
      </button>
      {/*ziskat projekty, doplnit moj, vypisat cely store*/}
    </div>
  );
};

const mapStateToProps = state => {
  const data = {
    store: getStore(state),
    idUser: getIdUser(state)
  };
  return {data};
};

const mapDispatchToProps = dispatch => ({
  fetchMockData: bindActionCreators(fetchMockData, dispatch),
  setProjectTheme,
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

