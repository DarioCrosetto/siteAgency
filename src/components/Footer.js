import React from 'react'
import { makeStyles } from'@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { Paper, Button } from '@material-ui/core';




const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '35vh',
    backgroundColor: '#f6f6f6',
    alignItems: "center",

  },
  gridContainer: {
    margin: '50px',
    alignItems: "center",
  },
  mainfooter : {
    color: 'white',
    backgroundColor: '#dc3545',
    paddingTop: '3em',
    position: 'relative',
    bottom: '0',
    width: '100%'
  },

}));

export default function Footer(){
  const classes = useStyles();
  return (
    <div className={classes.mainfooter}>
      <div className={classes.container}>
        <div className={classes.row}>
          {/* Column1 */}
          <div className={classes.col}>
            <h4>THICC MEMES INC</h4>
            <h1 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className={classes.col}>
            <h4>Stuff</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className={classes.col}>
            <h4>WELL ANOTHER COLUMN</h4>
            <ui className="list-unstyled">
              <li>DANK MEMES</li>
              <li>OTHER STUFF</li>
              <li>GUD STUFF</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className={classes.row}>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}
