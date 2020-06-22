import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import LoginDrawer from './LoginDrawer';
import SignUpDrawer from './SignUpDrawer';

import { Button } from '@material-ui/core';
import logo from '../../assets/imgs/cartLogo/Logo.svg';
import './splashPage.css';
import '../../components/buttons/button.css';

const SplashPage = () => {
  let history = useHistory();
  const [user, setUser] = useState({
    fName: 'Guestaccount',
    lName: 'Account',
    email: 'guest@guestaccount.com',
    password: '123apple'
  });

  const [signUpDrawer, setSignUpDrawer] = useState(false);
  const [loginDrawer, setLoginDrawer] = useState(false);
  window.localStorage.setItem('cart', JSON.stringify([]));

  const toggleDrawer = (open) => (event) => {
    setSignUpDrawer(open);
    setLoginDrawer(open);
  };

  function handleGuestLogin(e) {
    e.preventDefault();
    axios({
      method: 'POST',
      url: `http://localhost:8080/users/login`,
      data: {
        email: user.email,
        password: user.password
      }
    })
      .then(({ data }) => {
        localStorage.setItem('token', data.token);
        setUser({ ...user, password: '', email: '' });
        history.push('/location');
      })
      .catch((e) => console.log(e.message.toString(), 'Crendentials error'));
  }

  return (
    <div className="splash-container">
      <div className="splash-top">
        <h2>On-the-Go</h2>
        <h3>Shopping</h3>
        <p>Skip the checkout lines</p>
      </div>

      <img src={logo} alt="On-the-shop shopping cart logo" />

      <div className="splash-bottom">
        <Button
          variant="contained"
          className="button-lg-green"
          onClick={() => setLoginDrawer(true)}
        >
          Login
        </Button>
        <Button
          variant="contained"
          className="button-lg-hollow"
          onClick={() => setSignUpDrawer(true)}
        >
          Signup
        </Button>

        <Button className="elusive-button" onClick={(e) => handleGuestLogin(e)}>
          Continue as guest
        </Button>

        <LoginDrawer toggleDrawer={toggleDrawer} loginDrawer={loginDrawer} />

        <SignUpDrawer
          toggleDrawer={toggleDrawer}
          signUpDrawer={signUpDrawer}
          setSignUpDrawer={setSignUpDrawer}
        />
      </div>
    </div>
  );
};

export default SplashPage;
