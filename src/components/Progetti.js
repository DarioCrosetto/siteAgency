import React, { useCallback, useState } from 'react'
import { makeStyles } from'@material-ui/core/styles'
import HeaderForSite from './HeaderForSite'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { Grid, Button } from '@material-ui/core';
import Footer from './Footer';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Form from './Form';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontFamily: 'Playfair',
    },
    
}));

export default function Progetti(){

  const classes = useStyles();

  return (
    <div>
        <HeaderForSite />
      <div className={classes.root}>
        Progetti
      </div>
      <Footer />
    </div>
  );
}
