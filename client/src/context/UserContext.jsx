import React, { useState, useEffect, createContext } from 'react'
import axios from "axios"

export const UserContext = createContext()

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState([])
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [refetch, setRefetch] = useState(false)

  const token = localStorage.getItem("token")

  useEffect(()=>{
    setRefetch(true)
  }, [])

  useEffect(()=>{
    if(token){
      axios.get(`/users/me`, {headers: {Authorization: `Bearer ${token}`}
      }).then(({data}) => {
        setUser(data)
        setLoggedIn(true)
      }).catch((e) => console.log(e.message.toString()))
    }}, [refetch, token])


  return(
    <UserContext.Provider value={{
      user,       setUser, 
      isLoggedIn, setLoggedIn, 
      token,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContextProvider}
