import React, { useEffect } from 'react'
import { makeStyles } from'@material-ui/core/styles'
import siteExamples from '../../static/siteExamples'
import HeaderForSite from '../HeaderForSite'
import Footer from '../Footer';
import Gallery from "react-photo-gallery";
import { photosTreTrulli } from "../../static/photosTreTrulli";
import { Grid, Paper } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'Playfair',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/MetàSchermoScimmieOnTheRoad.jpg'})`,
    backgroundSize: 'cover',
  },
  conteinerTitle: {
    width: '100%',
    textAlign: 'right',
    margin: '5%',
  },
  carousel:{
    justifyContent: 'center',
    backgroundColor: '#fff',
    minHeight: '20vh',
  },
  colorText: {
    color: '#DC143C',
  },

  title: {
    color: '#000000',
    fontSize: '2.7rem',
    letterSpacing:'5px',

  },
}));

export default function Progetto({ match }){
  const classes = useStyles();

  const photos = [
    {
      src: process.env.PUBLIC_URL + '/assets/ScimmiePresentation.jpg',
      width: 4,
      height: 3
    },
    {
      src: process.env.PUBLIC_URL + '/assets/TreTrulliPresentation.jpg',
      width: 1,
      height: 1
    }
  ];

  return (
      <div>
        <HeaderForSite />
        <div className={classes.root} id='root'>
          <div className={classes.conteinerTitle}>
            <h2 className={classes.title_h}>
              Giovane, semplice, moderno.
            </h2>
            <h1 className={classes.title}>
              ScimmmieOnTheRoad  
            </h1>
            <h2 className={classes.colorText} >Esplorare il mondo e condividere le esperienze</h2>
            
          </div>
        </div>
      
      <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Gallery photos={photosTreTrulli} direction={"column"}/>;
        </Grid>

        </Grid>
      </div>
        <Footer />
      </div>
  );
}

