import React from "react";
import { setProjectTheme } from "../redux/actions";
import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
import { getStore } from "../redux/selectors";


const setTheme = ( setProjectTheme, dispatch ) => () => {
  const data = {id: '19', theme: 'nova tema'};
  dispatch(setProjectTheme(data));
};

const SettingsPage = (props) => {
  console.log('================================')
  console.log('newState: ', props.store);
  return (
  <div>
    Settings Page
    <button onClick={setTheme(props.setProjectTheme, props.dispatch)}>
      Set project theme
    </button>
  </div>
  );
};

const mapStateToProps = state => ({store: getStore(state)});

const mapDispatchToProps = dispatch => ({
  setProjectTheme,
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);

