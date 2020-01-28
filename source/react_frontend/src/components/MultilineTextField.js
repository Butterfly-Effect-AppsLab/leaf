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
        textField: {
            borderRadius: "8px",
            width: "100%",

        },
        outline: {
            borderColor: ProjectColors.orange(),
        },
        input: {
            '&::placeholder': {
                color: ProjectColors.darkGray(),
                opacity: 1,
            },
            color: ProjectColors.darkGray(),

        }
    }))
;

export default function MultilineTextField(props) {
    const classes = useStyles();
    const {text} = props;
    const field_name = props.field_name;
    const row_num = props.row_num;
    const background_color = props.background_color;
    const [value, setValue] = React.useState(text);

    const handleChange = event => {
        setValue(event.target.value);
    };

    //tu treba posielat hodnotu do reduxu
    const handleBlur = () => {
        console.log(value);
    };

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                placeholder={field_name}
                multiline
                rowsMax={row_num}
                rows={row_num}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                variant="outlined"
                className={classes.textField}
                style={{backgroundColor: background_color}}
                InputProps={{
                    classes: {notchedOutline: classes.outline, input: classes.input,},
                }}
            />
        </form>
    );
}