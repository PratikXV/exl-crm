import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Dform from './components/Dform';
import Dfooter from './components/Dfooter';


function App() {
  return (
  <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <img
            src="https://www.agcnetworks.com/wp-content/uploads/2016/07/logo.png"
            
            className="d-inline-block align-top"
            alt="exl"
          />
          <Link className="navbar-brand" to={"/sign-in"}></Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/dash" component={Dform} />
          </Switch>
        </div>
      </div>
    </div>
    <div>
    <Dfooter/>
    </div>
    </Router>
    
  );
}

export default App;