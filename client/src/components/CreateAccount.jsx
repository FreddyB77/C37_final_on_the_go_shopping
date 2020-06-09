import React, {useState} from 'react'
import {TextField, Button } from '@material-ui/core'
import '../App.css'


const CreateAccount = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail ]= useState('')
    const [password, setPassword] = useState('')
    const [ user, setUser ] = useState({
        fName: '',  lName:'',
        email:'',   password:''
    })
    const [confirmPass, setConfirmPass] = useState('');

    const Nav = () => {
        return (
        <div className='cAccount-nav'>
           <Button>Cancel</Button>
           <h1>Step 1/2</h1>
        </div>
        )
    }
    const handleFormSubmit = () => {
        if(user.password !== confirmPass){ console.log("Password") }
    }

    const handleFName = (e) => { setUser({...user, fName: e.target.value}) }
    const handleLName = (e) => { setUser({...user, lName: e.target.value}); console.log(user) }
    const handleEmail = (e) => { setUser({...user, email: e.target.value}) }
    const handlePassword = (e) => { setUser({...user, password: e.target.value}) }


    return(
        <div class="createAccount-page">
        <Nav />
        <h1>Create Account</h1>

        <form autoComplete="off" noValidate className="cAccount-form">
            <>
                <h3>First name</h3>
                <TextField 
                    variant="outlined"
                    placeholder="Michael"
                    type="text"
                    onChange={e => handleFName(e)}
                />
            </>
            <>
                <h3>Last name</h3>
                <TextField 
                    id="outlined-basic" 
                    placeholder="Scott"
                    variant="outlined" 
                    onChange={e => handleLName(e)}
                />
            </>
            <>
            <h3>Email</h3>
            <TextField 
                id="outlined-basic" 
                placeholder="mscott@hotmail.com"
                variant="outlined" 
                onChange={e => handleEmail(e)}
            />
            </>
            <>
                <h3>Password</h3>
                <TextField
                    id="outlined-password-input"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={e => handlePassword(e)}
                />
            </>
            <>
                <h3>Confirm Password</h3>
                <TextField
                    id="outlined-password-input"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    onChange={e => setConfirmPass(e.target.value)}
                />
            </>
            <p>By signing up you agree to the <span>Term of Service</span></p>
        </form>
        
        <Button 
            id="cAccount-button"
            variant="conatined" 
            color="secondary"
            onClick={handleFormSubmit}
        >
            Create Account 
        </Button>
        </div>
    )
}

export default CreateAccount
