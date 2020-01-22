import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from "@material-ui/core";
import * as ProjectColors from "../utils/colors";

const useStyles = makeStyles(theme => ({
    box: {
        color: ProjectColors.orange(),
    },
    label: {
        color: ProjectColors.darkGray(),

    },
    root: {
        margin: 5,
        marginLeft: 0,
    }

}));

export default function ToDo(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checked: false,
    });
    const {label} = props;

    const handleChange = name => event => {
        setState({...state, [name]: event.target.checked});
    };

    return (
        <FormControlLabel
            classes={{
                label: classes.label,
                root: classes.root,
            }}
            control={
                <Checkbox
                    className={classes.box}
                    checked={state.checked}
                    onChange={handleChange('checked')}
                    value="checked"
                    color="primary"

                />
            }
            label={label}
        />

    );
}
