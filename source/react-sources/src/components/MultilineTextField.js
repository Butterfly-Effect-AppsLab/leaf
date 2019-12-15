import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: 10,
      width: '95%',
    },
  },
}));

export default function MultilineTextField(props){
  const classes = useStyles();
  const field_name = props.field_name;
  const row_num = props.row_num;
  const [value, setValue] = React.useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <div>
        
        <TextField
          id="outlined-textarea"
          label={field_name}
          placeholder={field_name}
          multiline
          rowsMax={row_num}
          rows={row_num}
          value={value}
          onChange={handleChange} 
          variant="outlined"
        />
        
      </div>
    </form>
  );
}

