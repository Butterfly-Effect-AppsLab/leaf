import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import * as ProjectColors from "../utils/colors";

const useStyles = makeStyles(theme => ({
    root: {
            width: '80%',
            marginTop: '15px',
            marginRight: 'auto',
            marginLeft: 'auto'
    },
    background: {
        boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.06)",
        background: "transparent",
        borderRadius: "8px",
        width: "100%",

    },
    outline: {
        borderColor: ProjectColors.orange(),
    }
}));

export default function MultilineTextField(props) {
    const classes = useStyles();
    const field_name = props.field_name;
    const row_num = props.row_num;
    const [value, setValue] = React.useState('');

    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="outlined-textarea"
                placeholder={field_name}
                multiline
                rowsMax={row_num}
                rows={row_num}
                value={value}
                onChange={handleChange}
                variant="outlined"
                className={classes.background}
                InputProps={{
                    classes: {notchedOutline: classes.outline},
                }}
            />
        </form>
    );
}