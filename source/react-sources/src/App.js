/*
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactt
        </a>
      </header>
    </div>
  );
}

export default App;

*/

import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

/*
export default function TextFields() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="standard-name"
        label="Name"
        className={classes.textField}
        value={values.name}
        onChange={handleChange('name')}
        margin="normal"
      />
    );
}
*/

function App() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: '',
    new_name: '',
  });

  const handleChange = param_name => event => {
    setValues({ ...values, [param_name]: event.target.value});
  };

  const handleSubmit = param_nname => () => {
    setValues({ ...values, [param_nname]: values.name});
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {values.new_name}</h1>
        <form className={classes.container} noValidate autoComplete="off">        
        <TextField 
          id="standard-name"
          label="Username"
          className={classes.textField}
          onChange={handleChange('name')}
          margin="normal"
          color="primary"
        />
        </form>
        <Button 
          variant="contained" 
          color="primary"
          onClick={handleSubmit('new_name')}
        >
          Sign in
        </Button>

      </header>
    </div>
  );
}

export default App;

