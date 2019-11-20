import React from 'react';
import '../App.css';

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

function Hello() {
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

export default Hello;

