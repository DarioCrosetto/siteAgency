import React from 'react'
import { makeStyles } from'@material-ui/core/styles'
import { Avatar, Grid, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  
    root:{
        flexGrow: '1',
        color: '#000000',
    },
    
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
      },

    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        color: '#000000',
        fontFamily: 'Playfair',
        textDecoration: 'none !important',
        fontWeight: 'bold'
    },

}));

export default function MenuForSiteDesktop(){
  const classes = useStyles();
  return (

    <div className={classes.root}>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
        
          <Link
            to="/" 
            className={classes.toolbarLink}
          >
            Home
          </Link>

          <Link
            to="/projects" 
            className={classes.toolbarLink}
          >
            Progetti
          </Link>

          <Link
            to="/contact"           
            className={classes.toolbarLink}
          >
            Contattaci
          </Link>
        
      </Toolbar>
    </div>
  );
}
