import React, {useState, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
import { Button, Drawer, TextField } from '@material-ui/core'
import './splashPage.css'


const LoginDrawer = ({toggleDrawer, loginDrawer }) => {
    let history = useHistory()
    const [ loginEmail, setLoginEmail ] = useState('')
    const [ pass, setPass ] = useState('')    
    const { setLoggedIn, setUser } = useContext(UserContext)

    function handleLogin(e){
        e.preventDefault()
        axios({
          method: "POST",
          url: `http://localhost:8080/users/login`,
          data: {
            email: loginEmail,
            password: pass
          }})
          .then(({data}) => {
            localStorage.setItem("token", data.token)
            setLoggedIn(true)
            setLoginEmail("")
            setPass("")
            setUser({firstName: data.user.firstName, email: data.user.email})
            toggleDrawer(false)
            history.push("/home")

          })
          .catch((e) => console.log(e.message.toString(), "Crendentials error"))
    }


    return (
        <div>
            {/*Login Drawer Refractor Later */}
            <React.Fragment>
                    <Drawer 
                        open={loginDrawer} 
                        id="login-drawer"
                        anchor='bottom'
                        onClose={toggleDrawer(false)}
                    >
                        <hr style={{width:'10%', margin:"8px auto 32px auto"}}/>

                        <form className="login-form" noValidate autoComplete="off" onSubmit={e => handleLogin(e)}>
                        <h1>Login</h1>
                            <TextField 
                                placeholder="Email" 
                                variant="outlined"
                                label="Email"
                                type="email"
                                onChange={e => setLoginEmail(e.target.value)}
                                />

                            <TextField 
                                id="outline-basic" 
                                variant="outlined"
                                label="Password" 
                                type="password"
                                onChange={e => setPass(e.target.value)}
                            />
                            <Button
                            id="login-button"
                            className="button-lg-green"
                            color="secondary"
                            onClick={(e) => handleLogin(e)}>
                                 Log In
                            </Button>
                        </form>        
                    </Drawer>
                </React.Fragment>

        </div>
    )
}

export default LoginDrawer
