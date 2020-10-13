import React, { useEffect } from 'react'
import { makeStyles } from'@material-ui/core/styles'
import siteExamples from '../static/siteExamples'
import HeaderForSite from './HeaderForSite'
import Footer from './Footer';
import { Carousel } from 'react-responsive-carousel';




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: 'Playfair',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

  carousel:{
    justifyContent: 'center',
    backgroundColor: '#fff',
    minHeight: '20vh',
  
  }
}));

export default function Progetto({ match }){
  const classes = useStyles();

  return (
      <div>
        <HeaderForSite />
        <div className={classes.root}>
            Progetto {siteExamples[match.params.id].extendedDescription}
        </div>
        <Carousel>
            <div className={classes.carousel}>
                CIAO1         
            </div>
            <div className={classes.carousel}>
               CIAO2
            </div>
        </Carousel> 
        <Footer />
      </div>
  );
}

