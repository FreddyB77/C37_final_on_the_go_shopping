import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserContext'
import axios from "axios"

const Login = () => {
  const {setUser, setLoggedIn, user} = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  const logIn = async (e) => {
    e.preventDefault()
    console.log("USer Login attempt")
    await axios({
      method: "POST",
      url: `/users/login`,
      data: {
        email: email,
        password: password
      }})
      .then(({data}) => {
        console.log(data, "response")
        setUser(data.user)
        localStorage.setItem("token", data.token)
        setLoggedIn(true)
        setEmail("")
        setPassword("")
      })
      .catch((e) => console.log(e.message.toString(), "Crendentials error"))
  }

  return(
      <>
      <form onSubmit={e => logIn(e)}>
        <input 
          type="email"
          name="email"
          placeholder="Enter email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input 
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
      <div>
        {user.name}
      </div>
    </>
  )
}

export default Login
