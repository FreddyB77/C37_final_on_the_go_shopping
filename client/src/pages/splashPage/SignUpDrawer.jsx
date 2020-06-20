import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Drawer } from '@material-ui/core'

const SignUpDrawer = ({signUpDrawer, toggleDrawer}) => {
    let history = useHistory()
    return (
        <div>
            {/*Sign Up Drawer*/}
            <React.Fragment>
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
                            onClick={() => history.push("/create-account")}
                        >
                                Sign Up with Email
                        </Button>
                        <p style={{textAlign:"center", marginTop:"8px"}}>Privacy Policy</p>
                    </Drawer>
                </React.Fragment>
        </div>
    )
}

export default SignUpDrawer
