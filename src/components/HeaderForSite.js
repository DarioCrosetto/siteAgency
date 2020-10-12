import React, { useCallback } from 'react'
import { makeStyles  } from'@material-ui/core/styles'
import { AppBar, Button, Collapse, IconButton, Toolbar } from '@material-ui/core';

import MenuForSite from './MenuForSite'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        height: '8vh',
        fontFamily: 'Playfair',
      },
    
      appbar: {
        background: 'none',
      },
    
      appbarWrapper: {
        width: '90%',
        margin: '0 auto',
      },
    
      appbarTitle: {
        flexGrow: '1',
        color: '#000000',
      },
    
      icon: {
        color: '#000000',
        fontSize: '3rem',
      },
    
      colorText: {
        color: '#DC143C',
      },
}));

export default function HeaderForSite(){

  const classes = useStyles();
  

  return (
    
      <AppBar className={classes.appbar} elevation={0}>
        <div className={classes.root}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>
                U<span className={classes.colorText}>Site</span>
                </h1>
                <MenuForSite />
            </Toolbar>
        </div>
      </AppBar>
  );
}
