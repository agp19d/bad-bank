import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Navigation() {

  const { isLoggedIn, userIcon } = useAuth();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Bad Bank</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/create-account">Create Account</Nav.Link>
          <Nav.Link as={Link} to="/withdraw">Withdraw</Nav.Link>
          <Nav.Link as={Link} to="/deposit">Deposit</Nav.Link>
          <Nav.Link as={Link} to="/balance">Balance</Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          {isLoggedIn && <div className="user-icon">{userIcon}</div>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
