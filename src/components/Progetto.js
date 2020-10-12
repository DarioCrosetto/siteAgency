import React, { useEffect } from 'react'
import { makeStyles } from'@material-ui/core/styles'
import siteExamples from '../static/siteExamples'
import HeaderForSite from './HeaderForSite'
import Footer from './Footer';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Playfair',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
        <Footer />
      </div>
  );
}

