import React, {useContext} from 'react'
import { UserContext } from "../../context/UserContext"
import { Button } from '@material-ui/core'
import axios from "axios"

const LogoutButton = ({history}) => {
  const { setUser, setLoggedIn } = useContext(UserContext)

  const logOut = async () => {
    const token = localStorage.getItem("token")

    await axios({
      method: "POST",
      url: `/users/logout`,
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(({data}) =>{
      localStorage.removeItem("token")
      console.log(data)
      setUser({})
      setLoggedIn(false)
      history.pushState("/login")
    })
    .catch(e => console.log(e.message.toString()))
  }
  return(
    <Button onClick={logOut}>Log out</Button>
  )
}

export default LogoutButton