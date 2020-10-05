import React, {useEffect, useState} from 'react'
import { makeStyles } from'@material-ui/core/styles'
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link as Scroll} from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
 
  appbar: {
    background: 'none',
  },

  appbarWrapper:{
      width: '80%',
      margin: '0 auto',
  },

  appbarTitle: {
    flexGrow: '1',  
  },

  icon:{
      color: '#fff',
      fontSize: '2rem',
  },

  colorText:{
    color:'#5AFF3D'
  },

  title:{
    color: '#fff',
    fontSize: '3.5rem',

  },

  conteinerTitle:{
    textAlign: 'center',
  },

  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },

}));

export default function Header(){
  const classes = useStyles();
  const [checked,setChecked] = useState(false);
  useEffect(()=>{
    setChecked(true);
  },[]);
  return (
  <div className={classes.root} id="header">
      <AppBar className = {classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>my<span className={classes.colorText}>Site</span></h1>
                <IconButton>
                    <SortIcon className={classes.icon} />
                </IconButton>
            </Toolbar>
        </AppBar>
        <Collapse 
            in={checked} 
            {...(checked ? {timeout: 2000} : {})} 
            collapsedHeight={50}
            >
            <div className={classes.conteinerTitle}>
                <h1 className={classes.title}>
                Benvenuto su <br />
                my<span className={classes.colorText}>Site</span>
                </h1>
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
