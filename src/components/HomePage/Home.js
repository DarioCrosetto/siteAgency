import React from 'react'
import { makeStyles } from'@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import HeaderHomePage from './HeaderHomePage';
import Card from '../Card';
import WeDO from '../WeDO';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
}));

export default function Home(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <HeaderHomePage />
      <Card />
      <WeDO />
    </div>
  );
}
