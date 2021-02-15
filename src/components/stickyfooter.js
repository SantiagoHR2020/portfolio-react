import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa';

function Copyright() {
  return (
    <Typography variant={'body2'} color={'textSecondary'}>
      {'Copyright © '}
      <Link color={'inherit'} href={'https://material-ui.com/'}>
        Santiago Hincapie
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    margin: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
  
 
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <footer className={classes.footer}>
        <Container maxWidth={'sm'} >
          <span>
            <a
              href='https://github.com/SantiagoHR2020'
              target='_blank'
              style={{}}
            >
              <FaGithub size={30} color='black' />{' '}
            </a>
          </span>
          <span>
            <a
              href='http://www.linkedin.com/in/santiago-hincapie'
              target='_blank'
              style={{}}
            >
              <FaLinkedin size={30} color='blue' />{' '}
            </a>
          </span>
          <span>
            <a href='mailto:santiagohr81@hotmail.com' style={{}}>
              <FaAddressCard size={30} color='red' />{' '}
            </a>
          </span>

          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
