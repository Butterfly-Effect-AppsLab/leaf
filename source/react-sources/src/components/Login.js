import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'block',
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

function Login() {
  const classes = useStyles();
  const [names, setNames] = React.useState({
    name: '',
    new_name: '',
  });
 const [passws, setPassws] = React.useState({
    pass: '',
    new_pass: '',
  });

  const handleChangeName = (param_name) => event => {
    setNames({ ...names, [param_name]: event.target.value});
  };

  const handleChangePass = param_pass => event => {
    setPassws({ ...passws, [param_pass]: event.target.value});
  };

const handleSubmitName = (param_nname) => {
    setNames({ ...names, [param_nname]: names.name});
    console.log(names);
  };
  const handleSubmitPass = (param_npass) => {
    setPassws({ ...passws, [param_npass]: passws.pass});
    console.log(passws);
  };



  return (
    <div id="Login" align="center" >
          <h1>Prihlásenie {names.new_name} {passws.new_pass} </h1>
          <Grid
            container
            justify="center"
            alignItems="center"
          >
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                  id="standard-name"
                  label="E-mail"
                  className={classes.textField}
                  onChange={handleChangeName('name')}
                  margin="normal"
                  color="primary"
                  align
                />
                <br />
                <TextField
                  id="standard-password"
                  label="Heslo"
                  className={classes.textField}
                  onChange={handleChangePass('pass')}
                  margin="normal"
                  color="primary"
                />
            </form>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            // onClick={handleSubmitPass('new_pass')}
            onClick={() => {
                handleSubmitName('new_name');
                handleSubmitPass('new_pass');
            }}
          >
            Prihlásiť sa
          </Button>

    </div>
  );
}

export default Login;
