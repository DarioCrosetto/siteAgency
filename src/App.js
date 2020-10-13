import React from 'react'
import { makeStyles } from'@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Home from './components/HomePage/Home';
import Contact from './components/Contatti/Contact';
import Progetto from './components/ProgettoSingolo/Progetto';
import Progetti from './components/Progetti/Progetti';

import useWindowSize from './hook/useWindowSize';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
}));

export default function App(){
  const classes = useStyles();
  const windowSize = useWindowSize();
  const isDesktopWidth = windowSize > 1300;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />    
          <Route path="/contact" component={Contact} />
          <Route path="/projects/:id" component={Progetto} />
          <Route path="/projects/" component={Progetti} />
          </Switch>
        </Router>
    </div>
  );
}
