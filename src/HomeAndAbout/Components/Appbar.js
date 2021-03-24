import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeRounded from '@material-ui/icons/HomeRounded';

import Drawer from './Drawer'
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    boxShadow: 'none',
  },
  btns: {
    margin: theme.spacing(1),
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="static" color='transparent' className={classes.appbar}>
          <Toolbar>
            <Drawer/>
            <Typography variant="h6" className={classes.title} color='primary'>
              oSXpert
            </Typography>
            <Link to="/OsXpert">
              <IconButton
                className={classes.btns} 
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color='primary'
              >
                <HomeRounded />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
        <br />
    </div>
  );
}