import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import '../App.css';

const CreateAccount = ({ history }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({
    fName: '',
    lName: '',
    email: '',
    password: ''
  });
  const [confirmPass, setConfirmPass] = useState('');

  const Nav = ({ history }) => {
    return (
      <div className="cAccount-nav">
        <Button>Cancel</Button>
        <h1>Step 1/2</h1>
      </div>
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        localStorage.setItem('token', data.token);
      })
      .catch((e) => console.log(e.message.toString()));
  };

  const handleFName = (e) => {
    setUser({ ...user, fName: e.target.value });
  };
  const handleLName = (e) => {
    setUser({ ...user, lName: e.target.value });
    console.log(user);
  };
  const handleEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };
  const handlePassword = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  return (
    <div className="createAccount-page">
      <Nav />
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
            onChange={(e) => handleFName(e)}
          />
        </>
        <>
          <h3>Last name</h3>
          <TextField
            id="outlined-basic"
            placeholder="Scott"
            variant="outlined"
            onChange={(e) => handleLName(e)}
          />
        </>
        <>
          <h3>Email</h3>
          <TextField
            id="outlined-basic"
            placeholder="mscott@hotmail.com"
            variant="outlined"
            onChange={(e) => handleEmail(e)}
          />
        </>
        <>
          <h3>Password</h3>
          <TextField
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            variant="outlined"
            onChange={(e) => handlePassword(e)}
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateAccount;
