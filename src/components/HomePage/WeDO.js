import React, { useCallback } from 'react'
import { makeStyles } from'@material-ui/core/styles'
import {useHistory} from 'react-router-dom';
import { Button} from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '70vh',
    backgroundColor: '#f6f6f6',
    fontFamily: 'Playfair',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginBottom: '4%'
  },
  title: {
    color: '#000000',
    fontSize: '2.7rem',
    letterSpacing:'5px',

  },

  conteinerTitle: {
    width: '100%',
    textAlign: 'left',
    margin: '5%',
  },
  colorText: {
    color: '#DC143C',
  },

  button:{
    color: '#DC143C',
    backgroundColor: '#fff',
    borderRadius: '4px',
    margin: 'auto',
},
}));

export default function Home(){

  const classes = useStyles();
  const history = useHistory();

  const handleOnClick = useCallback(() => history.push('/contact/'), [history]);

  return (
    <div className={classes.root}>
      <div className={classes.conteinerTitle}>
          <h3 >
            Siamo qui per te!
          </h3>
          <h2 >
            Usiamo la nostra competenza e professionalità per creare la pagina web <br />che hai sempre desiderato.<br />
            Il nostro scopo è valorizzare la tua attività con la creazione di un sito <br />semplice, completo e personalizzato 
            rispondendo alle tue esigenze.
          </h2>
          <Button variant="outlined" color="secondary" className={classes.button} onClick={handleOnClick}>
                Contattaci
                </Button>
        </div>
    </div>
  );
}
