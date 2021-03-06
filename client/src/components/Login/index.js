import React, {useContext} from 'react';
import {Form, Button, Alert } from 'react-bootstrap';
import "./style.css";
import {AuthContext} from "../../utils/Auth.js"; 
import { Redirect } from "react-router-dom";

function Login(props) {
    // console.log(props);

    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        clearInputs,
        clearErrors
    } = props;
    
    const { currentUser } = useContext(AuthContext); // context API if user is logged in

    // When the user logins in, get the UID from their account to add to DB when saving workouts
    // if (currentUser) {
    //     const uid=fire.auth().currentUser.uid;
    //     // API.getUid(uid);
    //     console.log(uid);
    // }

    return (
        <section>
            <h1 style={{ color: 'white', textAlign: 'center', marginTop: "60px", marginBottom: "80px", textShadow: '3px 3px 4px black' }}> 
                Log In 
            </h1>

            <Form id="authForm" className="loginContainer">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label className="formLabel">Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                    />
                    <Form.Text className="text-muted errorMsg">
                        {emailError}
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label className="formLabel">Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value) }
                    />
                    <Form.Text className="text-muted errorMsg">
                        {passwordError}
                    </Form.Text>
                </Form.Group>

                <div className="btnContainer">
                    <Button className="accountSubmit" variant="primary" type="submit" onClick={handleLogin}>
                        Log In
                    </Button>
                    <p style={{ color: 'black', paddingTop: '10px' }}> Don't have an account? 
                        <span id="signUpBtn" 
                            onClick={() => 
                                {
                                    setHasAccount(!hasAccount);
                                    clearInputs("");
                                    clearErrors("");
                                }
                            }
                        > Sign Up </span> 
                    </p>
                </div>
            </Form>

            { currentUser ? (
                <>
                    <Alert variant={'success'} className="loginSuccess">
                        You're now logged in!
                    </Alert>

                    <Redirect to="/" />
                </>
            ) : (
                <>
                </>
            ) }

        </section>
        
    );
}

export default Login;