import React, { useCallback } from 'react'
import { makeStyles } from'@material-ui/core/styles'
import Header from './Header'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { IconButton } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '200vh',
      fontFamily: 'Playfair',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bgContatti.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% 52%',
    },
    icon: {
      color: '#000000',
      fontSize: '5rem',
    },
    concat: {
      height:'70vh',
      width: '35%',
      background: '#fcfcfc',
      borderColor: 'green',
      border: '30px',
      display: 'flex',
      justifyContent: 'center',
      borderRadius: '10px',
      textAlign:'center',
    },
    form:{
      display: 'flex',
      flexWrap: 'wrap',
    }
}));

export default function Conact(){

  const classes = useStyles();

  return (
    <div>
      <Header />
      <div  className={classes.root}>
        <div className={classes.concat}>
          <div>
            <QuestionAnswerIcon className={classes.icon} />
          </div>
          
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
            id="outlined-uncontrolled"
            label="Nome"
            defaultValue="Mario"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="outlined-uncontrolled"
            label="Cognome"
            defaultValue="Rossi"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="outlined-uncontrolled"
            label="Email"
            defaultValue="mario.rossi@gmail.com"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="outlined-uncontrolled"
            label="Telefono"
            defaultValue="0123456789"
            variant="outlined"
            margin="normal"
          />
          <TextField
            id="outlined-uncontrolled"
            style={{ margin: 8 }}
            label="Messaggio"
            defaultValue="Ciao, vi scrivo per un progetto che ho in mente per la mia attività..."
            variant="outlined"
            margin="normal"
            fullWidth
          />
          </form>
        </div>
      </div>
    </div>
  );
}
