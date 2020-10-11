import React, { useCallback } from 'react'
import { makeStyles } from'@material-ui/core/styles'
import {useHistory} from 'react-router-dom';
import { AppBar, Button, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        height: '8vh',
        fontFamily: 'Playfair',
        background: '#f6f6f6',
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
        fontSize: '2rem',
      },
    
      colorText: {
        color: '#DC143C',
      },
}));

export default function Home(){

  const classes = useStyles();
  const home = () => {};
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/contact/'), [history]);

  return (
    
      <AppBar className={classes.appbar} elevation={0}>
        <div className={classes.root}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle} onClick={home}>
                U<span className={classes.colorText}>Site</span>
                </h1>
            <IconButton >
                <SortIcon className={classes.icon} />
            </IconButton>
            </Toolbar>
        </div>
      </AppBar>
  );
}
