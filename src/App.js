import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Products from './pages/Products';
import { Teams, TeamsOne, TeamsTwo, TeamsThree } from './pages/Teams';
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
          <Route path='/reports' exact component={Reports} />
          <Route path='/reports/reports1' exact component={ReportsOne} />
          <Route path='/reports/reports2' exact component={ReportsTwo} />
          <Route path='/reports/reports3' exact component={ReportsThree} />
          <Route path='/products' component={Products} />
          <Route path='/teams' component={Teams} />
          <Route path='/teams/teams1' exact component={TeamsOne} />
          <Route path='/teams/teams2' exact component={TeamsTwo} />
          <Route path='/teams/teams3' exact component={TeamsThree} />
          <Route path='/messages' component={Messages} />
          <Route path='/support' component={Support} />
          <Route path='/logout' component={LogOut} />


        </Switch>
      </Router>
         
    </>
  );
}

export default App;