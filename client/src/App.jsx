import React, { useContext} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CartContextProvider } from './context/CartContext';
import { SearchContextProvider } from './context/SearchContext';
import { UserContextProvider, UserContext } from './context/UserContext'

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
  const  token  = useContext(UserContext)

  const handleUnauth = (Component) => { return !token ? Component : <SplashPage/>}
  return (
    <BrowserRouter>
      <CartContextProvider>
      <SearchContextProvider>
      <UserContextProvider>
        <Switch>

          <Route path="/"                exact component={GetStarted} /> 
          <Route path="/add-payment"     component={AddPayment} />
          <Route path="/create-account"  component={CreateAccount} />
          <Route path="/geo"             component={LocationGeo} />
          <Route path="/instructions"    component={Instructions}/>
          <Route path="/login"           component={SplashPage}/>
          <Route path="/location-1"      component={LocationOne} />
          <Route path="/locationZipcode" component={LocationZipCode} />
          {/*--------- A U T H O R I Z A T I O N --- R E Q. ------------*/}
          <Route path="/account"         render={() => handleUnauth(<Account/>)} />
          <Route path="/cart"            render={() => handleUnauth(<Cart/>)} />
          <Route path="/category/list"   render={() => handleUnauth(<CategoryList/>)} />
          <Route path="/checkout"        render={() => handleUnauth(<CheckoutPage/>)} />
          <Route path="/explore"         render={() => handleUnauth(<Explore/>)} />
          <Route path="/home"            render={() => handleUnauth(<Home/>)} />
          <Route path="/pdp"             render={() => handleUnauth(<ProductDescriptionPage/>)}  />
          <Route path="/receiptPage"     render={() => handleUnauth(<ReceiptPage/>)} />
          <Route path="/scan"            render={() => handleUnauth(<Scanner/>)} />

        </Switch>
      </UserContextProvider>
      </SearchContextProvider>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
