import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },

  appbar: {
    background: 'none',
  },

  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },

  appbarTitle: {
    flexGrow: '1',
  },

  icon: {
    color: '#fff',
    fontSize: '2rem',
  },

  colorText: {
    color: '#5AFF3D',
  },

  title: {
    color: '#fff',
    fontSize: '3.5rem',
  },

  conteinerTitle: {
    textAlign: 'center',
  },

  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },

  title_h: {
    color: '#fff',
  },
}));

export default function Header() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [aggettivo, setAggettivo] = useState(0);
  const [dir, setDir] = useState(1); //crescente
  const [lunghezza, setLength] = useState(aggettivi[aggettivo].length);
  const [agg_to_display, setDisplay] = useState('');

  const aggettivi = ['Funzionale', 'Reattivo'];


  const func_agg_to_display = () => {
    if (dir === 1 && lunghezza >= aggettivi[aggettivo].length) {
      setDir(0);
      setLength(lunghezza - 1);
    } else if (dir === 0 && lunghezza <= 0) {
      setDir(1);
      if (aggettivo >= aggettivi.length - 1) {
        setAggettivo(0);
      } else {
          setAggettivo(aggettivo+1);
      }
      setLength(lunghezza + 1);
    } else if (dir === 0) {
        setLength(lunghezza - 1);
    } else {
        setLength(lunghezza + 1);
    }
    const b = aggettivi[aggettivo];
    setDisplay(b.substring(0, lunghezza));
  }

  useEffect(() => {
    setChecked(true);
  }, [setChecked]);

  useEffect(() => {
    const myVar = () => setInterval(func_agg_to_display, 2000);
    myVar();
    return clearInterval(myVar);
  }, [func_agg_to_display])

  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            my<span className={classes.colorText}>Site</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={50}>
        <div className={classes.conteinerTitle}>
          <h1 className={classes.title}>
            Benvenuto su <br />
            my<span className={classes.colorText}>Site</span>
          </h1>
          <h2 className={classes.title_h}>
            Serve un sito{' '}
            <span className={classes.colorText}>{agg_to_display}</span> per la
            tua attività?
          </h2>
          <h3 className={classes.title_h}>Sei nel posto giusto!</h3>
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
