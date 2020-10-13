import React from 'react'
import { makeStyles } from'@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import WeDO from '../WeDO';
import Footer from '../Footer';
import CardPhone from './CardPhone';
import useWindowSize from '../../hook/useWindowSize';
import HeaderForSite from '../HeaderForSite'



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
}));

export default function HomePhone(){
  const classes = useStyles();
  const windowSize = useWindowSize();
  const isDesktopWidth = windowSize > 1300;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderForSite />
      
      <WeDO />
      <Footer />
    </div>
  );
}
