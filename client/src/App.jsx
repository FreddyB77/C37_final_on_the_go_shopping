import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';


import GetStarted from './components/GetStarted'
import CreateAccount from './components/CreateAccount'
import Instructions from './components/Instructions'
import SplashPage from './components/SplashPage'
import AddPayment from './components/AddPayment'
import Home from './components/Home'
import Scanner from './components/Scanner'
import Explore from './components/Explore'

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Switch>
          <Route path="/" exact component={GetStarted} /> 
          <Route path="/instructions" component={Instructions}/>
          <Route path="/login" component={SplashPage}/>
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/add-payment" component={AddPayment} />
          <Route path="/home" component={Home}/>
          <Route path="/scan" component={Scanner} />
          <Route path="/explore" component={Explore} />
        </Switch>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
