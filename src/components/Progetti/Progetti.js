import React, { useCallback, useState } from 'react'
import { makeStyles } from'@material-ui/core/styles'
import HeaderForSite from '../HeaderForSite'
import Footer from '../Footer';
import siteExamples from '../../static/siteExamples'
import ImageCard from '../ImageCard'

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
