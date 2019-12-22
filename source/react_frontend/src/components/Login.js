import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import GoogleLogin from 'react-google-login';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'block',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250,
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
    show_pass: false,
  });

  const handleChangeName = (param_name) => event => {
    setNames({ ...names, [param_name]: event.target.value});
  };

  const handleChangePass = param_pass => event => {
    setPassws({ ...passws, [param_pass]: event.target.value});
  };

  const handleSubmitName = (param_nname) => {
    setNames({ ...names, [param_nname]: names.name});
  };

  const handleSubmitPass = (param_npass) => {
    setPassws({ ...passws, [param_npass]: passws.pass});
  };

const handleClickShowPassword = () => {
    setPassws({ ...passws, show_pass: !passws.show_pass });
  };

const handleMouseDownPassword = event => {
    event.preventDefault();
  };

const responseGoogle = (response) => {
  console.log(response);
}

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
                    id="standard-adornment-password"
                    type={passws.show_pass ? 'text' : 'password'}
                    label="Heslo"
                    margin="normal"
                    color="primary"
                    className={classes.textField}
                    align
                    value={passws.pass}
                    onChange={handleChangePass('pass')}
                    InputProps={{
                    endAdornment: (
                          <InputAdornment position="start">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {passws.show_pass ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                          </InputAdornment>
                    )
                    }}
                />
            </form>
          </Grid>
        <br />
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
                handleSubmitName('new_name');
                handleSubmitPass('new_pass');
            }}
          >
            Prihlásiť sa
          </Button>
        <br/>
        <br/>
        <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />

    </div>
  );
}

export default Login;
