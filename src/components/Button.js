// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import {default as MaterialButton} from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function Button(props) {
    const classes = props.classes;
    return (
        <MaterialButton raised className={classes.button}>
          Show currencies dynamics
        </MaterialButton>
    );
  }
  
  Button.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Button);