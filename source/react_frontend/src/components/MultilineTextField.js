import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: 10,
            width: '95%',
        },
    },
    background: {
        boxShadow: "0px 4px 26px rgba(0, 0, 0, 0.06)",
        background: "rgba(255, 255, 255, 0.5)",
        margin: 10,
        border: "3px solid #E17A47",
        borderRadius: "6px",
    },

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
            />

        </form>
    );
}

