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

function App() {
  return (
    <div className='App'>
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
