import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';



export default function ToDo() {
  const [state, setState] = React.useState({
    checked: false,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checked}
                onChange={handleChange('checked')}
                value="checked"
                color="primary"
              />
            }
            label="Urobil si uz toto a toto a toto a toto a toto a toto a toto?"
          />
        </FormGroup>
  );
}
