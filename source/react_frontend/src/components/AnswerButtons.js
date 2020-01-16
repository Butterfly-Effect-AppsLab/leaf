import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import React from "react";

// const useStyles = makeStyles(theme => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(0),
//         },
//     },
//     button: {
//         minWidth: "85%",
//         margin: "15px",
//         border: "2px solid #EFCA59",
//         borderRadius: '6px',
//         textColor: '#7C7C7C',
//         textTransform: 'none',
//         textAlign: 'center'
//     },
// }));


// const renderButton = answer => {
//     return (
//         <Button className={classes.button}>
//             {answer}
//         </Button>
//     );
// };

// const options = ["Každého človeka, ktorý si umýva zuby", "Eco zodpovedných ľudí", "Rodiny"]

const useStyles = makeStyles(theme => ({
    typography: {
        padding: theme.spacing(2),
    },
    answerBox: {
        textAlign: 'center',
        marginTop: "30px",
        marginBottom: "30px",
        marginRight: "auto",
        marginLeft: "auto",
        overflowX: "auto",
        backgroundColor: "transparent",
        border: '3px solid #EFCA59',
        borderRadius: '6px',
    },
    button: {
        backgroundColor: "transparent",
        width: '100%',
    }
}));

export default function SimplePopover() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={classes.answerBox}>
            <Button className={classes.answerBox} onClick={handleClick}>
                Open Popover
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>The content of the Popover.</Typography>
            </Popover>
        </div>
    );
}