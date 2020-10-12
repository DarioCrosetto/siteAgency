import React from 'react'
import { makeStyles } from'@material-ui/core/styles'
import InstagramIcon from '@material-ui/icons/Instagram';
import { Avatar, Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '20vh',
    fontFamily: 'Playfair',
    backgroundColor: '#f2f2f2'
    
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    fontSize: '4rem',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  icon: {
    fontSize: '3rem',
  },

  appbarTitle: {
    flexGrow: '1',
    color: '#000000',
  },

  

  colorText: {
    color: '#DC143C',
  },
  

}));

export default function Footer(){
  const classes = useStyles();
  return (

    <div className={classes.root}>
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
            Vieni a scoprirci su Instagram
            <Avatar className={classes.avatar} onClick={(e) => {
            e.preventDefault();
            window.location.href='https://www.instagram.com/scimmieontheroad/?hl=it';
            }}> 
                <InstagramIcon className={classes.icon}/>
            </Avatar>
            

         </Grid>
            
    </div>
  );
}
