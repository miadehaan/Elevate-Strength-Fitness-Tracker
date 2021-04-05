import React, {useContext} from 'react';
import {Form, Button } from 'react-bootstrap';
import "./style.css";
import {AuthContext} from "../../utils/Auth.js"; 
import { Redirect } from "react-router-dom";

function Signup(props) {
    // console.log(props);
    const { currentUser } = useContext(AuthContext); // context API if user is logged in

    const {
        email, 
        setEmail, 
        password, 
        setPassword,
        handleSignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        clearInputs,
        clearErrors
    } = props;

    return (
        <section>

            <h1 style={{ color: 'white', textAlign: 'center', marginTop: "100px" }}> 
                Sign Up 
            </h1>

            <Form id="authForm">
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
                    <Button className="accountSubmit" variant="primary" type="submit" onClick={handleSignup} >
                        Create Account
                    </Button>
                    <p> Already have an account? 
                        <span id="loginBtn" style={{ color: 'yellow'}} 
                            onClick={() => 
                                {
                                    setHasAccount(!hasAccount);
                                    clearInputs("");
                                    clearErrors("");
                                }
                        } > Log In </span>
                    </p>
                </div>
            </Form>

            { currentUser ? (
                <Redirect to="/" />
            ) : (
                <>
                </>
            ) }

        </section>
        
    );
}

export default Signup;