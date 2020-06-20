import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import '../App.css';

import OnBoardingNav from './navs/OnBoardingNav'

const CreateAccount = ({ history }) => {
  const [user, setUser] = useState({
    fName: '',  lName: '',
    email: '',  password: ''
  });
  const [confirmPass, setConfirmPass] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user)
    await axios({
      method: 'POST',
      url: `/users`,
      data: {
        email: user.email,
        password: user.password,
        firstName: user.fName,
        lastName: user.lName
      }
    })
      .then(({ data }) => {
        setUser(data.user);
        localStorage.setItem('token', data.token)
        setUser({...user, password: "", email: ''})
        history.push("/add-payment")
      })
      .catch((e) => console.log(e.message.toString()));
  };

  return (
    <div className="createAccount-page">
      <OnBoardingNav 
        history={history} 
        text="Step 1/3"
      />

      <h1>Create Account</h1>

      <form
        autoComplete="off"
        noValidate
        className="cAccount-form"
        onSubmit={handleSubmit}
      >
        <>
          <h3>First name</h3>
          <TextField
            variant="outlined"
            placeholder="Michael"
            type="text"
            onChange={(e) => setUser({ ...user, fName: e.target.value })}
          />
        </>
        <>
          <h3>Last name</h3>
          <TextField
            id="outlined-basic"
            placeholder="Scott"
            variant="outlined"
            onChange={(e) => setUser({ ...user, lName: e.target.value })}
          />
        </>
        <>
          <h3>Email</h3>
          <TextField
            id="outlined-basic"
            placeholder="mscott@hotmail.com"
            variant="outlined"
            onChange={(e) => {setUser({ ...user, email: e.target.value }); console.log(user)}}
          />
        </>
        <>
          <h3>Password</h3>
          <TextField
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </>
        <>
          <h3>Confirm Password</h3>
          <TextField
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </>
        <p>
          By signing up you agree to the <span>Term of Service</span>
        </p>
        <button 
          className="button-lg-green"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
