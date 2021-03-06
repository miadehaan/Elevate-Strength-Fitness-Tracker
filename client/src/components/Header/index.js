import React from 'react';
import {Navbar, Nav  } from 'react-bootstrap';

function Header() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">Elevate Strength</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#today">Today</Nav.Link>
                    <Nav.Link href="#week">Week</Nav.Link> */}
                </Nav>

                <Nav>
                    <Nav.Link href="/login">Log In</Nav.Link>
                    <Nav.Link>|</Nav.Link>
                    <Nav.Link eventKey={2} href="/signup"> Sign Up </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;