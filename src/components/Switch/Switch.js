import { React, Fragment, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { FormGroup, FormControlLabel,  Switch } from '@material-ui/core';

import "./Switch.css";

const CustomSwitch = withStyles((theme) => ({
  container: {
    flexGrow: 1,
  },

  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },

  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#42B75E',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#42B75E',
      border: '6px solid #fff',
    },
  },

  thumb: {
    width: 24,
    height: 24,
  },
  
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {
    color: '#42B75E',
    
  },
  label: {
    color: '#1B1B25', 
    padding: theme.spacing(1),
    fontWeight: 'bolder',
    fontFamily: 'Poppins'
  },
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
        label: classes.label,
      }}
      {...props}
    />
  );
});

export default function CostumizedSwitch(props) {
  const { labelText } = props;
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Fragment>
      <FormGroup aria-label="position" row>
        <FormControlLabel
            className="MuiFormControlLabel-label"
            label={`${labelText}`}
            value="start"
            labelPlacement="start"
            control={ 
              <CustomSwitch 
                checked={state.checkedA} 
                onChange={handleChange} 
                name="checkedA" />
              }
        />
      </FormGroup>  
    </Fragment>
  );
}