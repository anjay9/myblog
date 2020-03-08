import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
}));

function Nav(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar>
        <Toolbar>
          Blog's Name
        </Toolbar>
      </AppBar>
      <div className={ classes.toolbar } />
    </Fragment>
  );
}

export default Nav;
