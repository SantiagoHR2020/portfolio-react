import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography,ButtonBase, Button} from '@material-ui/core';
import proPic from '../../assets/images/03000_13094.jpg';
import Resume from '../../assets/SantiagoHincapieResumeFullStack.docx.pdf';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 950,
  },
  image: {
    width: 220,
    height: 220,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },

}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={proPic} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  About Me
                </Typography>
                <Typography variant="body2" gutterBottom>
                I am a MERN Full Stack Developer leveraging project management and business intelligence background to build websites, apps, and dashboards. Recently earned a certificate in full stack development from the University of Central Florida, enhancing my skills in responsive web design JavaScript, React.js, Node.js, MySQL, and MongoDB. I am passionate about developing websites, apps, dashboards, learning new skills, and to continuing to improve.
                </Typography>
                <br/>
              
                 <Typography variant="body2" gutterBottom>
                For a more complete list of skills please refer to my resume below.
                </Typography>
                <br/>
                <Button variant="contained" color="primary" href={Resume} target="_blank">
                  Resume
                </Button> 
              </Grid> 
            
            </Grid>
   
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}