import React, { useEffect } from 'react'
import { makeStyles } from'@material-ui/core/styles'
import siteExamples from '../static/siteExamples'
import Header from './Header'


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    
  }
}));

export default function Card({ match }){
  const classes = useStyles();

  useEffect(() => {
      console.log(match.params.id)
  }, []);

  return (
      <div>
        <Header />
        <div>
            Progetto {siteExamples[match.params.id].extendedDescription}
        </div>
      </div>
  );
}

