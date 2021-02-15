import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Stickyfooter from './components/stickyfooter';
import Notmatch from './components/pages/404';
import Contact from './components/pages/contact';
import Portfolio from './components/pages/portfolio';
import About from './components/pages/about';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
 
  
  App: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }
 
}));



function App() {

  const classes = useStyles()

  
  return (
    <div className={classes.App}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path={['/', '/about']}>
            <About />
          </Route>

          <Route exact path='/portfolio'>
            <Portfolio />
          </Route>

          <Route exact path='/contact'>
            <Contact />
          </Route>

          <Route></Route>
        </Switch>
      </Router>

      <Stickyfooter />
    </div>
  );
}

export default App;
