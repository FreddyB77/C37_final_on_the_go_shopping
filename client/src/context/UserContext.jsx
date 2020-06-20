import React, { useState, useEffect, createContext } from 'react'
import axios from "axios"

export const UserContext = createContext()

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState([])
  const [loggedIn, setLoggedIn] = useState(false)
  const [refetch, setRefetch] = useState(false)

  const token = localStorage.getItem("token")

  useEffect(()=>{
    setRefetch(true)
  }, [])

  useEffect(()=>{
    if(token){
      axios.get(`/users/me`, {headers:{Authorization:`Bearer ${token}`}
    })
    .then(({data})=>{
      console.log(data)
      setUser(data)
      setLoggedIn(true)
    })
    .catch(e => console.log(e.message.toString()))
    }
  }, [token])

  useEffect(()=>{
    if(token){
      refetch &&
      axios.get(`${process.env.REACT_APP_SERVER_URL}`, {headers: {Authorization: `Bearer ${token}`}})
      .then(({data}) => {
        console.log(data)
        setRefetch(false)
      })
      .catch(e => {console.log(e.message.toString())})
    }
  }, [loggedIn, token, refetch])


  return(
    <UserContext.Provider value={{
      user, 
      setUser, 
      loggedIn, 
      setLoggedIn, 
      token, 
      setRefetch,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContextProvider}
