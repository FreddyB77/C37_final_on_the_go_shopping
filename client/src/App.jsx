import React, { useContext} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { UserContext } from './context/UserContext'
import { CartContextProvider } from './context/CartContext';
import { SearchContextProvider } from './context/SearchContext';

import CreateAccount from './pages/splashPage/CreateAccount'
import Instructions from './pages/instructions/Instructions'
import SplashPage from './pages/splashPage/SplashPage'
import AddPayment from './pages/addPayment/AddPayment'
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
  const { isLoggedIn } = useContext(UserContext)
  const sp = <SplashPage />

  return (
    <BrowserRouter>
        <Switch>

          <Route path="/"                exact component={GetStarted} /> 
          <Route path="/add-payment"     component={AddPayment} />
          <Route path="/create-account"  component={CreateAccount} />
          <Route path="/geo"             component={LocationGeo} />
          <Route path="/instructions"    component={Instructions}/>
          <Route path="/login"           component={SplashPage}/>
          <Route path="/location-1"      component={LocationOne} />
          <Route path="/LocationZip"     component={LocationZip} />
          {/*--------- A U T H O R I Z A T I O N --- R E Q. ------------*/}
          <CartContextProvider>
          <SearchContextProvider>
            <Route path="/account"         render={() => isLoggedIn ? <Account/>      : sp} />
            <Route path="/cart"            render={() => isLoggedIn ? <Cart/>         : sp} />
            <Route path="/category/list"   render={() => isLoggedIn ? <CategoryList/> : sp} />
            <Route path="/checkout"        render={() => isLoggedIn ? <CheckoutPage/> : sp} />
            <Route path="/explore"         render={() => isLoggedIn ? <Explore/>      : sp} />
            <Route path="/home"            render={() => isLoggedIn ? <Home/>         : sp} />
            <Route path="/pdp/:item"       render={() => isLoggedIn ? <ProdDescPage/> : sp} />
            <Route path="/receiptPage"     render={() => isLoggedIn ? <ReceiptPage/>  : sp} />
            <Route path="/scan"            render={() => isLoggedIn ? <Scanner/>      : sp} />  
          </SearchContextProvider>
          </CartContextProvider>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
