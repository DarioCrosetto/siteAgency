import React from 'react'
import { makeStyles } from'@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Home from './components/HomePage/Home';
import Contact from './components/Contact';
import Progetto from './components/Progetto';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: '#fff',
  },
}));

export default function App(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects/:id" component={Progetto} />
          </Switch>
        </Router>
    </div>
  );
}
