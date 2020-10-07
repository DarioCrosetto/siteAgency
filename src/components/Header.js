import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

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
  },

  appbar: {
    background: 'none',
  },

  appbarWrapper: {
    width: '90%',
    margin: '0 auto',
  },

  appbarTitle: {
    flexGrow: '1',
    color: '#000000',
  },

  icon: {
    color: '#000000',
    fontSize: '2rem',
  },

  colorText: {
    color: '#DC143C',
  },

  title: {
    color: '#000000',
    fontSize: '3.7rem',
    letterSpacing:'5px',

  },

  conteinerTitle: {
    width: '100%',
    textAlign: 'left',
    margin: '5%',
  },

  goDown: {
    color: '#DC143C',
    fontSize: '4rem',
  },

  title_h: {
    letterSpacing:'5px',
    color: '#000000',
  },

  aggettivo: {
    color: '#DC143C',
    fontSize: '4.5rem',
  },

  containerScroll:{
      textAlign: 'center',  
      justifyContent: 'center',
    alignItems: 'center',
    },
}));

export default function Header() {
  const aggettivi = ['Funzionale', 'Reattivo', 'Informativo', 'Interessante'];
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [aggettivo, setAggettivo] = useState(0);
  const [dir, setDir] = useState(1); //crescente
  const [lunghezza, setLength] = useState(aggettivi[aggettivo].length);
  const [agg_to_display, setDisplay] = useState('');
  const [time, setTime] = useState(true);

  const func_agg_to_display = useCallback(() => {
    //console.log(lunghezza,aggettivo,dir)
    if(dir === 1 && lunghezza <= aggettivi[aggettivo].length){
        //console.log("sto aumentando e la lunghezza non è ancora quella massima")
        if(time >= 2){
            setLength(prev => prev + 1);
            setTime(0)
            setDisplay(aggettivi[aggettivo].substring(0, lunghezza) + "|");
        } else {
            setTime(prev => prev + 1)
        }
    } else if(dir === 1 && lunghezza >= aggettivi[aggettivo].length){
        //console.log("la parola è completa")
        /*if(time % 3){
            console.log(aggettivi[aggettivo].substring(0, lunghezza) + " ")
            setDisplay(aggettivi[aggettivo].substring(0, lunghezza) + ".");   
        } else {
            console.log(aggettivi[aggettivo].substring(0, lunghezza) + "|")
            setDisplay(aggettivi[aggettivo].substring(0, lunghezza) + "|");   
        }*/
        if(time >= 5){
            setTime(0)
            setDir(0)
        } else {
            setTime(prev => prev + 1)
        }
    } else if (dir === 0 && lunghezza >= 0){
        //console.log("sto diminuendo e la lunghezza non è ancora 0")
        if(time >= 0){
            setLength(lunghezza-1);
            setDisplay(aggettivi[aggettivo].substring(0, lunghezza) + "|");
            setTime(0)
        } else {
            setTime(prev => prev + 1)
        }
    } else if(dir === 0 && lunghezza < 0){

        if (aggettivo >= aggettivi.length - 1) {
            setAggettivo(0);
          } else {
              setAggettivo(prev  => prev +1);
          }
        setDir(1)
        
    }

    
  }, [dir, lunghezza, aggettivi, aggettivo, setDir, setLength, setAggettivo, setDisplay]);

  useEffect(() => {
    setChecked(true);
  }, [setChecked]);

  useEffect(() => {
    const myVar = setInterval(() => {
        func_agg_to_display()
    }, 30);
    return () => clearInterval(myVar);
  }, [dir, lunghezza, aggettivi, aggettivo, setDir, setLength, setAggettivo, setDisplay, func_agg_to_display]);


  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            U<span className={classes.colorText}>Site</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 3000 } : {})}
        collapsedHeight={50}>
        <div className={classes.conteinerTitle}>
          <h2 className={classes.title_h}>
            Benvenuto su U<span className={classes.colorText}>Site</span>
          </h2>
          <h1 className={classes.title}>
            Vuoi elevare la tua attività <br /> con un sito <span className={classes.aggettivo}> {agg_to_display}</span>
          </h1>
          <h2 className={classes.colorText} >Sei nel posto giusto!</h2>
          
        </div>

        <div className={classes.containerScroll}> 
          <Scroll to='examples' smooth='true'>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
          </div>
      </Collapse>
    </div>
  );
}
