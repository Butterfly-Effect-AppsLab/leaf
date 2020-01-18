import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Drawer from '@material-ui/core/Drawer';
import CardContent from "@material-ui/core/CardContent";

// const renderButton = answer => {
//     return (
//         <Button className={classes.button}>
//             {answer}
//         </Button>
//     );
// };

// const options = ["Každého človeka, ktorý si umýva zuby", "Eco zodpovedných ľudí", "Rodiny"]

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.transparent
    },
    typography: {
        width: 'auto',
        textAlign: 'center',
        marginTop: "30px",
        marginBottom: "30px",
        marginRight: "auto",
        marginLeft: "auto",
        overflowX: "auto"
    },
    box: {
        textAlign: 'center',
        marginTop: "30px",
        marginBottom: "60px",
        marginRight: "auto",
        marginLeft: "auto",
        overflowX: "auto",
        backgroundColor: "transparent",
    },
    answerOption: {
        textAlign: 'center',
        marginTop: "30px",
        marginBottom: "30px",
        marginRight: "auto",
        marginLeft: "auto",
        overflowX: "auto",
        backgroundColor: "transparent",
        border: '3px solid #EFCA59',
        borderRadius: '6px',
        width: '100%'
    },
}));

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        bottom: false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [side]: open});
    };

    const answer = side => (
        <div className={classes.box}
             role="presentation"
             onClick={toggleDrawer(side, false)}
             onKeyDown={toggleDrawer(side, false)}
        >
            <Button>
                Your are star
            </Button>
        </div>
    );

    return (
        <div className={classes.box}>
            <Button className={classes.answerOption} onClick={toggleDrawer('bottom', true)}>Odpoved 1</Button>
            <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                {answer('bottom')}
            </Drawer>
        </div>
    );
}
