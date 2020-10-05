import React from 'react'
import { makeStyles } from'@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Card from './components/Card';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },

}));

export default function App(){
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Card />
    </div>
  );
}

/*import React, { useEffect, useState} from 'react';
import './App.css';
import { AppBar, Collapse, CssBaseline, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  headerBar: {
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
    fontSize: '4rem',

  },
  conteinerTitle:{
    textAlign: 'center',
  },
  goDown: {
    color: '#5AFF3D',
    fontSize: '4rem',
  },
  rootCard: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },

}));

function App() {
  const classes = useStyles();
  const [checked,setChecked] = useState(false);
  useEffect(()=>{
    setChecked(true);
  },[]);
  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.headerBar}>
        
        <Collapse 
        in={checked} 
        {...(checked ? {timeout: 3000} : {})} 
        collapsedHeight={50}
        >
          <div className={classes.conteinerTitle}>
            <h1 className={classes.title}>
              Benvenuto su <br />
              my<span className={classes.colorText}>Site</span>
            </h1>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </div>
        </Collapse>

        <div>
        <Card className={classes.rootCard}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
        </div>

        
        
    </div>
    </div>
  );
}

export default App;*/
