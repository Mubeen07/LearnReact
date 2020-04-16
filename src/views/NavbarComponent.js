import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#Users">Users</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link to="/home" href="/">Home</Nav.Link>
                    <Nav.Link to="/user" href="/user">Users</Nav.Link>
                    <Nav.Link to="/post" href="/post">Posts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;