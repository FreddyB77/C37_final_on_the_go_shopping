import React, {useContext} from 'react'
import { UserContext } from "../context/UserContext"
import axios from "axios"

const Logout = () => {
  const { setUser, setLoggedIn } = useContext(UserContext)

  const logOut = async () => {
    const token = localStorage.getItem("token")
    await axios({
      method: "POST",
      url: `${process.env.REACT_APP_SERVER_URL}/users/logout`,
      headers: {Authorization: `Bearer ${token}`}
    })
    .then(({data}) =>{
      console.log(data, "logout response")
      localStorage.removeItem("token")
      setUser({})
      setLoggedIn(false)
    })
    .catch(e => console.log(e.message.toString()))
  }
  return(
    <button onClick={logOut}>Log out</button>
  )
}

export default Logout