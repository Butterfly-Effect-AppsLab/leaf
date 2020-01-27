import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import React from "react";
import * as ProjectColors from "../utils/colors";
import Drawer from "@material-ui/core/Drawer";


const useStyles = makeStyles(theme => ({
    box: {
        textAlign: "center",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    button: {
        textTransform: 'no',
        marginRight: '10px',
        marginLeft: '10px',
        paddingLeft: '7%',
        paddingRight: '7%',
        color: ProjectColors.white(),
        backgroundColor: ProjectColors.orange()
    },
    saved: {
        borderRadius: "21px",
        textAlign: "center",
        marginLeft: "5%",
        marginRight: "5%",
    },
    savedText: {
        fontSize: "17px",
        marginBottom: "5%",
        marginTop: "5%",
        textAlign: "center",
        color: ProjectColors.green(),
    },
    savedButton: {
        color: "white",
        width: "130px",
        marginBottom: "5%",
        background: ProjectColors.green(),
    }
}));

export default function MyProjectButtons(props) {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const {goToNextQuestion} = props;

    const handleSubmit = () => {
        setOpenDrawer(true);
    };

    const onClose = () => {
        setOpenDrawer(false)
    };

    const fullList = () => (
        <div role="presentation">
            <h1 className={classes.savedText}>Uložené</h1>
            <Button variant="contained" className={classes.savedButton} onClick={() => {onClose()}}>
                Ok
            </Button>
        </div>
    );

    return (
        <div className={classes.box}>
                <Button variant="contained" className={classes.button} onClick={() => {handleSubmit()}}>Uložiť</Button>
                <Button variant="contained" className={classes.button} onClick={() => {goToNextQuestion()}}>Ďalej</Button>
                <Drawer
                    anchor="bottom"
                    open={openDrawer}
                    classes={{
                        paper: classes.saved,
                    }}>
                    {fullList()}
                </Drawer>
        </div>
    );
}
