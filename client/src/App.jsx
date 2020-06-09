import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AppContextProvider } from './context/AppContext';


import GetStarted from './components/GetStarted'
import CreateAccount from './components/CreateAccount'
import Instructions from './components/Instructions'
import SplashPage from './components/SplashPage'

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <Switch>
          <Route path="/" exact component={GetStarted} /> 
          <Route path="/instructions" component={Instructions}/>
          <Route path="/home" component={SplashPage}/>
          <Route path="/create-account" component={CreateAccount} />
        </Switch>
      </AppContextProvider>
    </BrowserRouter>
  );
};

export default App;
