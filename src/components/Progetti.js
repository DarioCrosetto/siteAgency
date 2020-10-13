import React, { useCallback, useState } from 'react'
import { makeStyles } from'@material-ui/core/styles'
import HeaderForSite from './HeaderForSite'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { Grid, Button } from '@material-ui/core';
import Footer from './Footer';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Form from './Form';
import siteExamples from '../static/siteExamples'
import ImageCard from './ImageCard'

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('md')]:{
        flexDirection: 'column',
    },
    
    },
    
}));

export default function Progetti(){

  const classes = useStyles();

  return (
    <div>
        <HeaderForSite />
      <div className={classes.root}>
          <ImageCard example={siteExamples[0]}/>
          <ImageCard example={siteExamples[1]}/> 
      </div>
      <div className={classes.root}>
                
          <ImageCard example={siteExamples[2]}/>
          <ImageCard example={siteExamples[1]}/>
      </div>
      <Footer />
    </div>
  );
}
