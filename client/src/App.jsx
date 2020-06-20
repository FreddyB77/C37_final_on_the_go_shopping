import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';
import { SearchContextProvider } from './context/SearchContext';
import { UserContextProvider } from './context/UserContext'

import CreateAccount from './components/CreateAccount'
import Instructions from './pages/instructions/Instructions'
import SplashPage from './pages/splashPage/SplashPage'
import AddPayment from './pages/addPayment/AddPayment'
import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Account from './pages/account/Account'
import Cart from './pages/cart/Cart'
import ProductDescriptionPage from './pages/pdp/ProductDescriptionPage'
import Scanner from './pages/scan/Scanner'
import LocationOne from './pages/location/Location-1'
import LocationGeo from './pages/location/Location-Geo'
import LocationZipCode from './pages/location/Location-ZipCode'
import GetStarted from './pages/getStarted/GetStarted'
import CategoryList from './pages/category/CategoryList'
import CheckoutPage from './pages/checkout/Checkout'
import ReceiptPage from './pages/receipt/Receipt'

import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
      <SearchContextProvider>
      <UserContextProvider>
        <Switch>
          <Route path="/" exact component={GetStarted} /> 
          <Route path="/instructions" component={Instructions}/>
          <Route path="/login" component={SplashPage}/>
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/add-payment" component={AddPayment} />
          <Route path="/location-1" component={LocationOne} />
          <Route path="/geo" component={LocationGeo} />
          <Route path="/locationZipcode" component={LocationZipCode} />

          <Route path="/home" component={Home}/>
          <Route path="/scan" component={Scanner} />
          <Route path="/explore" component={Explore} />
          <Route path="/pdp" component={ProductDescriptionPage} />
          <Route path="/account" component={Account} />
          <Route path="/cart" component={Cart} />
          <Route path="/category/list" component={CategoryList}/>
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/receiptPage" component={ReceiptPage} />
          
        </Switch>
      </UserContextProvider>
      </SearchContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
