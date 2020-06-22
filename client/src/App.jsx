import React, { useContext} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from './context/UserContext'


import CreateAccount from './pages/splashPage/CreateAccount'
import Instructions from './pages/instructions/Instructions'
import SplashPage from './pages/splashPage/SplashPage'

import Home from './pages/home/Home'
import Explore from './pages/explore/Explore'
import Account from './pages/account/Account'
import Cart from './pages/cart/Cart'
import {ProductDescriptionPage as ProdDescPage } from './pages/pdp/ProductDescriptionPage'
import Scanner from './pages/scan/Scanner'
import LocationOne from './pages/location/Location-1'
import LocationGeo from './pages/location/Location-Geo'
import LocationZip from './pages/location/LocationZip'
import GetStarted from './pages/welcome/GetStarted'
import CategoryList from './pages/category/CategoryList'
import CheckoutPage from './pages/checkout/Checkout'
import ReceiptPage from './pages/receipt/Receipt'

import './App.css';

const App = () => {
  const { token } = useContext(UserContext)
  const sp = <SplashPage />

  return (
    <BrowserRouter>
        <Switch>

          <Route path="/"                exact component={GetStarted} /> 
          <Route path="/create-account"  component={CreateAccount} />
          <Route path="/instructions"    component={Instructions}/>
          <Route path="/login"           component={SplashPage}/>
          <Route path="/location"        component={LocationOne} />
          <Route path="/locationZip"     component={LocationZip} />
          <Route path="/locationGeo"     component={LocationGeo} />
          {/*------------------ A U T H O R I Z A T I O N -- R E Q. -----------------------*/}
          <Route path="/account"         render={() => token ? <Account/>      : sp} />
          <Route path="/cart"            render={() => token ? <Cart/>         : sp} />
          <Route path="/category/list"   render={() => token ? <CategoryList/> : sp} />
          <Route path="/checkout"        render={() => token ? <CheckoutPage/> : sp} />
          <Route path="/explore"         render={() => token ? <Explore/>      : sp} />
          <Route path="/home"            render={() => token ? <Home/>         : sp} />
          <Route path="/pdp/:item"       render={() => token ? <ProdDescPage/> : sp} />
          <Route path="/receiptPage"     render={() => token ? <ReceiptPage/>  : sp} />
          <Route path="/scan"            render={() => token ? <Scanner/>      : sp} />  

        </Switch>
    </BrowserRouter>
  );
};

export default App;
