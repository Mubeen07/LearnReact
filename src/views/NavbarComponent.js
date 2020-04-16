import React from 'react';
import {Navbar, Nav} from 'react-bootstrap'

const Navbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg"></Navbar>
            <Navbar.Brand href="#Users">Users</Navbar.Brand>
        </div>
    );
};

export default Navbar;