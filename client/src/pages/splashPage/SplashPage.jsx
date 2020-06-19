import React, {useState} from 'react'
import {Button, Drawer, TextField } from '@material-ui/core'

import logo from '../../assets/imgs/cartLogo/Logo.svg'
import './splashPage.css'
import '../../components/buttons/button.css'



const SplashPage = ({history}) => {
    const [ signUpDrawer, setSignUpDrawer] = useState(false)
    const [ loginDrawer, setLoginDrawer] = useState(false)
    const [ loginEmail, setLoginEmail ] = useState('')
    const [ pass, setPass ] = useState('')


    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setSignUpDrawer(open)
        setLoginDrawer(open)
    }

    const handleLogin = () => {
        console.log("Complete Login")
    }
    const handleEmailSignUp = () => {
        history.push("/create-account")
    }

    return (
        <div className="splash-container">
            <div className="splash-top">
                <h2>On-the-Go</h2>
                <h3>Shopping</h3>
                <p>Skip the checkout lines</p>
            </div>
            <img src={logo} />
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
                    SignUp
                </Button>


                {/*Login Drawer Refractor Later */}
                <React.Fragment key="bottom">
                    <Drawer 
                        open={loginDrawer} 
                        id="login-drawer"
                        anchor='bottom'
                        onClose={toggleDrawer(false)}
                    >
                        <hr style={{width:'10%', margin:"8px auto 32px auto"}}/>
                        <Button id="sDrawer-button">Continue with Google</Button>
                        <Button id="sDrawer-button">Continue with Facebook</Button>
                        <div className="cred-divider">
                            <hr />
                            <p>or</p>
                            <hr />
                        </div>

                        <form className="login-form" noValidate autoComplete="off">
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
                            />
                            <p id="fPassword">Forgot Password?</p>
                            <Button
                            id="login-button"
                            className="button-lg-green"
                            color="secondary">
                                 Log In
                            </Button>
                        </form>        
                    </Drawer>
                </React.Fragment>



                <React.Fragment key="bottom">
                    <Drawer 
                        open={signUpDrawer} 
                        anchor='bottom'
                        id="signUp-drawer"
                        onClose={toggleDrawer(false)}
                    >
                        <Button className="button-md-hollow">Continue with Google</Button>
                        <br></br>
                        <Button className="button-md-hollow">Continue with Facebook</Button>
                        <div className="cred-divider">
                            <hr />
                            <p>or</p>
                            <hr />
                        </div>
                        <Button 
                            className="button-lg-green"
                            onClick={handleEmailSignUp}
                        >
                                Sign Up with Email
                        </Button>
                        <p style={{textAlign:"center", marginTop:"8px"}}>Privacy Policy</p>
                    </Drawer>
                </React.Fragment>


            </div>
        </div>
    )
}

export default SplashPage
