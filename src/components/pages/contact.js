import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    
    margin: 'auto',
    justifyContent: 'center'
    
  },
  bullet: {
    display: 'inline-block',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
  },

});

export default function Contact() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
         <Typography variant="h3" component="h2" align='center'>
          <b>Contact Info</b>
        </Typography>
        <Typography variant="body1" component="p">
          <b>E-Mail: </b> santiagohr81@gmail.com
        </Typography>
        <Typography variant="body1" component="p">
          <b>GitHub User:</b> SantiagoHR2020
         </Typography>
         <Typography variant="body1" component="p">
          <b>GitHub Repo:</b> https://github.com/SantiagoHR2020
        </Typography>
        <Typography variant="body1" component="p">
         <b> LinkedIn:</b> https://www.linkedin.com/in/santiago-hincapie/
         </Typography>
      </CardContent>
    
    </Card>
  );
}


