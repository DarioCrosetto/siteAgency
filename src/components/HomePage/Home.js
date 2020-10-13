import React from 'react'
import { makeStyles } from'@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import HeaderHomePage from './HeaderHomePage';
import WeDO from '../WeDO';
import Footer from '../Footer';
import CardDesktop from '../CardDesktop';
import CardPhone from '../Phone/CardPhone';
import useWindowSize from '../../hook/useWindowSize';
import HeaderForSite from '../HeaderForSite';





const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
}));

export default function Home(){
  const classes = useStyles();
  const windowSize = useWindowSize();
  const isDesktopWidth = windowSize > 1300;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderForSite />
      <HeaderHomePage />
      { isDesktopWidth 
                    ? <CardDesktop />
                    : <CardPhone />
                }
      <WeDO />
      <Footer />
    </div>
  );
}
