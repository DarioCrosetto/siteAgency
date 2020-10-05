import React from 'react'
import { makeStyles } from'@material-ui/core/styles'
import ImageCard from './ImageCard';
import siteExamples from '../static/siteExamples'
import useWindowPosition from '../hook/useWindowPosition';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   
  },

}));

export default function Card(){
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id='examples'>
        <ImageCard example={siteExamples[0]} checked={checked}/>
        <ImageCard example={siteExamples[1]} checked={checked}/>

    </div>
  );
}