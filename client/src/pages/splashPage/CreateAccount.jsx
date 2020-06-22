import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';
import '../../App.css';
import './splashPage.css';

const CreateAccount = ({ history }) => {
  const [user, setUser] = useState({
    fName: '',
    lName: '',
    email: '',
    password: ''
  });
  const [passReq, setPassReq] = useState(true);

  useEffect(() => {
    if (user.password) {
      if (user.password.length < 8 || Boolean(user.password.length === 0)) {
        setPassReq(false);
      } else setPassReq(true);
    }
  }, [user.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (setPassReq) {
      await axios({
        method: 'POST',
        url: `/users`,
        data: {
          firstName: user.fName,
          lastName: user.lName,
          email: user.email,
          password: user.password
        }
      })
        .then(({ data }) => {
          setUser(data.user);
          localStorage.setItem('token', data.token);
          setUser({ ...user, password: '', email: '' });
          history.push('/location');
        })
        .catch((e) => console.log(e.message.toString()));
    }
  };

  return (
    <div className="createAccount-page">
      <div className="cAccount-nav">
        <Button onClick={() => history.push('/login')}>Cancel</Button>
        <h1>Step 1/3</h1>
      </div>

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
            onChange={(e) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </>

        <>
          <h3>Password</h3>
          <TextField
            id="outlined-password-input"
            type="password"
            variant="outlined"
            style={
              !passReq ? { border: '2px solid red', borderRadius: '4px' } : {}
            }
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </>

        <p id="pass-req">Your password need to be at least 8 characters long</p>

        <br></br>
        <p id="private-policy">
          By signing up you agree to the <span>Term of Service</span>
        </p>
        <Button className="button-lg-green" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default CreateAccount;
