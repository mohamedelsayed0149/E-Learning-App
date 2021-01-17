import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Teams from './pages/Teams';
import TeamsOne from './pages/Teams';
import TeamsTwo from './pages/Teams';
import TeamsThree from './pages/Teams';
import Messages from './pages/Messages';
import Support from './pages/Support';
import LogOut from './pages/LogOut';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
          <Route path='/team' component={Teams} />
          <Route path='/team/reports1' exact component={TeamsOne} />
          <Route path='/team/reports2' exact component={TeamsTwo} />
          <Route path='/team/reports3' exact component={TeamsThree} />
          <Route path='/messages' component={Messages} />
          <Route path='/support' component={Support} />
          <Route path='/logout' component={LogOut} />


        </Switch>
      </Router>
         
    </>
  );
}

export default App;