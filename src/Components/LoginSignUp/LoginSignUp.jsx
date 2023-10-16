// Simply type 'rafc' to write the component automatically

import React from 'react'
import { useState } from 'react'
import './LoginSignUp.css'

//import the icons
import emailIcon from '../../Assets/email.png'
import passwordIcon from '../../Assets/password.png'
import personIcon from '../../Assets/person.png'


const LoginSignup = () => {

    //const [var_name_of_state, function_name] = useState(val_for_the_state)
    // useState is a react hook
    // the function is for change the state

    //initial state is "Log In"
    const [action, setAction] = useState("Log In");

    return (
        <div className="container">
            <div className="header">
                <div className="title">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {
                    // if state is log in, then name input field won't be shown
                    action === "Sign Up" ?
                        <div className="eachInput">
                            <img src={personIcon} alt='' />
                            <input type='text' placeholder='Name' />
                        </div>
                        : <div></div>
                }
                <div className="eachInput">
                    <img src={emailIcon} alt='' />
                    <input type='email' placeholder='Email' />
                </div>
                <div className="eachInput">
                    <img src={passwordIcon} alt='' />
                    <input type='password' placeholder='Password' />
                </div>
            </div>
            {
                //if state is sign up, then foget password section won't be shown
                action === "Sign Up" ? <div></div> :
                    <div className="forget-password">
                        Forget Password?
                        <span>Click Here!</span>
                    </div>
            }

            <div className="submitContainer">
                {/* 
                If state is Log In then class name will be "submit", otherwise "submit gray" 
                for showing gray background to the button;
                Change the state "Log In" when the button is clicked
                */}
                <div className={action === "Log In" ? "submit" : "submit gray"} onClick={() => setAction("Log In")}>
                    Log In
                </div>
                <div className={action === "Sign Up" ? "submit" : "submit gray"} onClick={() => setAction("Sign Up")}>
                    Sign Up
                </div>
            </div>
        </div >
    )
}

export default LoginSignup
