import React, { useCallback, useState } from 'react'
import { makeStyles } from'@material-ui/core/styles'
import Header from './Header'
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
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bgContatti.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
      background: 'rgba(255,255,255,0.5)',
      
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    icon: {
      color: '#000000',
      fontSize: '4rem',
    },
    grid:{
      backgroundColor: '#fff',
      verticalAlign:'middle',
    }
}));

export default function Contact(){

  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  //onSubmit={handleSubmit}
  return (
    <div>
      <div className={classes.root}>
        <Header />
        <div>
        <Paper className={classes.paper}>
        <Form />
          
      </Paper>
      </div>
    </div>
    </div>



      

  );
}
