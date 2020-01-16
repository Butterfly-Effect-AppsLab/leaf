import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';

export default function PopoverAnswer() {
  const useStyles = makeStyles(theme => ({}));
    return (
        <Popover
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'centre',
          }}
        >
          The content of the Popover.
        </Popover>
    )
};