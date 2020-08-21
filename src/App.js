import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dform from './components/Dform';
//import Dtable from './components/Dtable';
import DNav from './components/DNav';
import FooterPage from './components/Dfooter';
import Login from './components/Login';
//import './App.css';

function App() {
  return (
    <>
      <DNav/>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact={true} />
          <Route path="/dash" component={Dform} />
        </Switch>
      </BrowserRouter>
      <FooterPage/>
    </>
  );
}

export default App;
