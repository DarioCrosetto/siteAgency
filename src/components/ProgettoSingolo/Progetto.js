import React, { useEffect, useState } from 'react'
import { makeStyles } from'@material-ui/core/styles'
import siteExamples from '../../static/siteExamples'
import HeaderForSite from '../HeaderForSite'
import Footer from '../Footer';
import Gallery from "react-photo-gallery";
import { photosTreTrulli } from "../../static/photosTreTrulli";
import { Grid, Grow, Paper } from '@material-ui/core';
import useWindowPosition from '../../hook/useWindowPosition';
import { ContactSupportOutlined } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh',
    fontFamily: 'Playfair',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: '4%',
  },
}));

export default function Progetto({ match }){
  const classes = useStyles();

  const [checkedCardZero, setCheckedCardZero] = useState(false);

  const checkedCardOne = useWindowPosition('cardZero',0.4);
  const checkedCardTwo = useWindowPosition('cardZero',1);
  const checkedCardThree = useWindowPosition('cardZero',2);

  useEffect(() => {
    setCheckedCardZero(true);
  }, [setCheckedCardZero]);

  return (
      <div>
        <HeaderForSite />

        <Grow in={checkedCardZero} {...(checkedCardZero ? { timeout: 2000 } : {})}>
        <div className={classes.root} id='cardZero'>
        </div>
        </Grow>

        <Grow in={checkedCardOne} {...(checkedCardOne ? { timeout: 2000 } : {})}>
        <div className={classes.root}>
        </div>
        </Grow>

        <Grow in={checkedCardTwo} {...(checkedCardTwo ? { timeout: 2000 } : {})}>
        <div className={classes.root}>
        </div>
        </Grow>

        <Grow in={checkedCardThree} {...(checkedCardThree ? { timeout: 2000 } : {})}>
        <div className={classes.root}>
        </div>
        </Grow>

        <Footer />
      </div>


  );
}

