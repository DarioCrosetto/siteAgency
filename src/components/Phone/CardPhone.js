import React from 'react'
import { makeStyles } from'@material-ui/core/styles'
import ImageCard from '../ImageCard';
import siteExamples from '../../static/siteExamples'
import useWindowPosition from '../../hook/useWindowPosition';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50px',
  
  },

  
}));

export default function Card(){
  const classes = useStyles();
  return (
    <div className={classes.root} id='examples'>
        CARD     

    </div>
  );
}

