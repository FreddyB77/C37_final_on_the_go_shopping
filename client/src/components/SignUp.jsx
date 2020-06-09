import React from 'react'
import '../signUp.css'
import '../App.css'

const SignUp = ({handleClose}) => {
  return (
    <>
    <div className="signUp-drawer">
    <button onClick={handleClose}>XXXX</button>
      <h1 className="signUp-title">Sign Up</h1>
      <button className="button signUp-button">
        Sign Up with Email
      </button>
      <div class="signUp-drawer-center">
        <hr className="signUp-hr"/>
        <p>or</p>
        <hr className="signUp-hr"/>
      </div> 
      <button className="button signUp-button">
        Continue with Apple
      </button>
      <button className="button signUp-button">
        Continue with Google
      </button>
      <p id="privacy-policy">Privacy Policy</p>
    </div>
    </>
  )
}

export default SignUp
