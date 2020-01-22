import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import GoogleLogin from 'react-google-login';
import {ReactComponent as Logo} from '../icons/logo.svg';
import {ReactComponent as Rocket} from '../icons/rocket.svg';
import history from "../utils/history";
import * as ProjectColors from "../utils/colors";

const useStyles = makeStyles(theme => ({
  container: {
    background: 'linear-gradient(207.11deg, ' + ProjectColors.yellow() + ' 0%,' + ProjectColors.orange() + ' 98%);',
    height: '100%',
    width: '100%',
    position: 'fixed',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundImage: Rocket,
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    position: 'fixed',
    bottom: '25%',
    align: 'center',
  },
  icon: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    position: 'fixed',
    bottom: '50%',
    align: 'center',
  },
  menu: {
    width: 200,
  },
}));

function Login() {
const classes = useStyles();

const responseGoogle = (response) => {
  console.log(response);
  history.push('/Firmy');
  };

  return (
    <div
        id="Login"
        align="center"
        className={classes.container}
    >
      <Rocket className={classes.icon} style={{bottom:'15%'}} />
      <Logo height='40px' className={classes.icon} />
        <GoogleLogin
            className={classes.button}
            clientId="702198151733-gkconifts891hamvv4euma658np5qbol.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            buttonText={'Prihlásiť cez Google'}

        />

    </div>
  );
}

export default Login;
