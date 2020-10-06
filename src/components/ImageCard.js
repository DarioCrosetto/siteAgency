import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        maxWidth: 545,
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
    },
    media: {
        height: 340,
    },
    title:{
        fontFamily:'Nunito',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#fff',
    },
    description:{
        fontFamily:'Nunito',
        fontSize: '1.1rem',
        color: '#fff',
    }
});


export default function ImageCard({example, checked}) {
  const classes = useStyles(
      
  );

  return (
      <Collapse in={checked} {...(checked ? {timeout: 1000} : {})}>
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={example.imageURL}
          title={example.title}
        />
        <CardContent>
          <Typography gutterBottom component="h2" className={classes.title}>
            {example.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {example.description}
          </Typography>
        </CardContent>
    </Card>
    </Collapse>
  );
}
