import React, {useContext} from 'react';
import {Navbar, Nav  } from 'react-bootstrap';
import "./style.css";
import fire from "../../fire";
import {AuthContext} from "../../utils/Auth.js"; 
import logo from "../../images/fitness_logo.png";

function Header() {

    const { currentUser } = useContext(AuthContext); // context API if user is logged in
    const username = currentUser.email.substring(0, currentUser.email.lastIndexOf("@"));
    console.log(username);

    // If the user is logged in, show a logout button
    const handleLogout = () => {
        fire.auth().signOut();
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="#3C3C3C" variant="dark">
            <Navbar.Brand href="/">
                <img id="appLogo" src={logo} alt="website logo"/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"> </Nav>


                { currentUser ? (
                    <>
                        <div id="displayName">
                            Welcome, { username }!
                        </div>


                        <Nav onClick={handleLogout}> 
                            <Nav.Link >Logout</Nav.Link>
                        </Nav>
                    </>
                ) : (
                    <Nav>
                        <Nav.Link href="/account">Log In</Nav.Link>
                    </Nav>
                )}
                
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;