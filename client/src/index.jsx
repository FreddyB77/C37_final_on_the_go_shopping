import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserContextProvider } from './context/UserContext'
import { LocationContextProvider } from './context/LocationContext'


ReactDOM.render( 
    <UserContextProvider>
    <LocationContextProvider>
        <App />
    </LocationContextProvider>
    </UserContextProvider> 
    , document.getElementById('root')
);
