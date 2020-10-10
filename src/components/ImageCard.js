import React, {useCallback} from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActions, Collapse} from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: 545,
        background: 'rgba(0,0,0,0.5)',
        margin: '45px',
    },
    media: {
        height: 340,
    },
    card:{
        background: '#f6f6f6',
        textAlign: 'center',
        alignContent: 'center',
    },
    title:{
        fontFamily:'Playfair',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#DC143C',
        letterSpacing:'4px',
        textAlign: 'center',
    },

    description:{
        fontFamily:'Playfair',
        fontSize: '1.1rem',
        color: '#000000',
    },

    button:{
        color: '#DC143C',
        backgroundColor: '#fff',
        borderRadius: '4px',
        margin: 'auto',
    },
});


export default function ImageCard({example, checked}) {
  const classes = useStyles(
      
  );
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/projects/' + example.id), [history]);

  return (
      <Collapse in={checked} {...(checked ? {timeout: 1000} : {})}>
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={example.imageURL}
          title={example.title}
        />
        <CardContent className={classes.card}> 
          <Typography gutterBottom component="h2" className={classes.title}>
            {example.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {example.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.card}>
              
                <Button variant="outlined" color="secondary" className={classes.button} onClick={handleOnClick}>
                Scopri
                </Button>
           
        </CardActions>
    </Card>
    </Collapse>
  );
}
