import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';


import GetStarted from './components/GetStarted'
import CreateAccount from './components/CreateAccount'
import Instructions from './components/Instructions'
import SplashPage from './components/SplashPage'
import AddPayment from './components/AddPayment'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Account from './pages/account/Account'
import Cart from './pages/cart/Cart'
import ProductDescriptionPage from './pages/pdp/ProductDescriptionPage'
import Scanner from './pages/scan/Scanner'


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
          <Route path="/pdp" component={ProductDescriptionPage} />
          <Route path="/account" component={Account} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
