import React from 'react'
import { makeStyles } from'@material-ui/core/styles'
import ImageCard from './ImageCard';
import siteExamples from '../static/siteExamples'
import useWindowPosition from '../hook/useWindowPosition';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button, CardActions, Collapse} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50px',
    '& p.carousel-status': {  // ACCESSO AD ELEMENTO INTERNO AL COMPONENTE
  },
    [theme.breakpoints.down('md')]:{
        flexDirection: 'column',
    }
  },

  carousel:{
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 'auto',
    [theme.breakpoints.down('md')]:{
        flexDirection: 'column',
    }
  
  }

}));

export default function Card(){
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id='examples'>
      <Collapse in={checked} {...(checked ? {timeout: 1000} : {})}>
        <Carousel>
            <div className={classes.carousel}>
                <ImageCard example={siteExamples[0]} checked={checked}/>
                <ImageCard example={siteExamples[1]} checked={checked}/>         
            </div>
            <div className={classes.carousel}>
                <ImageCard example={siteExamples[2]} checked={checked}/>
                <ImageCard example={siteExamples[1]} checked={checked}/>
            </div>
        </Carousel>        
      </Collapse>
    </div>
  );
}

