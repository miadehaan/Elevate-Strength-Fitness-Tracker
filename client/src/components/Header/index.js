import React, {useContext} from 'react';
import {Navbar, Nav  } from 'react-bootstrap';
import "./style.css";
import fire from "../../fire";
import {AuthContext} from "../../utils/Auth.js"; 

function Header() {

    const { currentUser } = useContext(AuthContext); // context API if user is logged in

    // If the user is logged in, show a logout button
    const handleLogout = () => {
        fire.auth().signOut();
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="#3C3C3C" variant="dark">
            <Navbar.Brand href="/">Elevate Strength</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"> </Nav>


                { currentUser ? (
                    <Nav onClick={handleLogout}> 
                        <Nav.Link >Logout</Nav.Link>
                    </Nav>
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