import React,{Suspense} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Loading from '../common/Loading'
import {NavLink} from "react-router-dom";
const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#Users">Users</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="mr-auto">
                    <NavLink to="/home" href="/">Home</NavLink>
                    <Suspense fallback={<div>  <Loading/> </div>}>
                    <NavLink to="/user" href="/user">Users</NavLink>
                    </Suspense>
                    <NavLink to="/post" href="/post">Posts</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarComponent;