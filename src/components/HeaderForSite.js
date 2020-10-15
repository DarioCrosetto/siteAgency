import React, { useCallback } from 'react'
import { makeStyles  } from'@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core';
import useWindowSize from '../hook/useWindowSize'

import MenuForSitePhone from './Phone/MenuForSitePhone'
import MenuForSiteDesktop from './Desktop/MenuForSiteDesktop'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
   
    rootToolbar: {   
        fontFamily: 'Playfair',
        height: '8vh',  
      },
    
      appbar: {
        background: 'none',
        
      },
    
      appbarWrapper: {
        width: '100%',
        margin: '0 auto',
        display: 'flex',                  /* establish flex container */
        flexDirection: 'row',           /* default value; can be omitted */
        flexWrap: 'nowrap',            /* default value; can be omitted */
        justifyContent: 'space-between',
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

      toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        color: '#000000',
        fontFamily: 'Playfair',
        textDecoration: 'none !important',
        fontWeight: 'bold'
    },
}));

export default function HeaderForSite(){

  const classes = useStyles();

  const windowSize = useWindowSize();
  const isDesktopWidth = windowSize > 1300;
  

  return (
      <AppBar className={classes.appbar} elevation={0} id='headerSite'>
        <div className={classes.rootToolbar}>
            <Toolbar className={classes.appbarWrapper}>
              <div>
              <Link
                to="/" 
                className={classes.toolbarLink}
              > 
              <h1 className={classes.appbarTitle}>
              U<span className={classes.colorText}>Site</span>
              </h1>
              </ Link>
              </ div>

              <div className={classes.menucontainer}>
              { isDesktopWidth 
                  ? <MenuForSiteDesktop />
                  : <MenuForSitePhone />
              }
              </div>
            </Toolbar>
        </div>
      </AppBar>
  );
}
