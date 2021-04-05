import React, { useState } from 'react';
import Login from "../components/Login";
import Signup from '../components/Signup';
import fire from "../fire";

function Account() {
    // setup Firebase Authentication
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(true); // determines if login or signup form should be shown

    // clear the inputs from the form
    const clearInputs = () => {
        setEmail("");
        setPassword("");
    }

    // clear the errors
    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }


    const handleLogin = () => {
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // var user = userCredential.user;
                alert("You're now logged in!");
            })
            .catch((error) => {
                //error
                // var errorCode = error.code;
                var errorMessage = error.message;

                alert("Error: " + errorMessage);
            });

        clearInputs();
        clearErrors();
    }

    const handleSignup = () => {
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then( (userCredential) => {
                // Signed in 
                // var user = userCredential.user;
                console.log("You successfully created an account!");
                alert("You successfully created an account!");
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;

                alert("Error: " + errorMessage);
            });

        clearInputs();
        clearErrors();
    }


    return (
        <div id="accountPg">
            { hasAccount ? (
                <Login 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                    clearInputs={clearInputs}
                    clearErrors={clearErrors}
                />

            ) : (
                <Signup
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                    clearInputs={clearInputs}
                    clearErrors={clearErrors}
                />
            )}
        </div>
    );
}

export default Account;