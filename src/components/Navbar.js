import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navigation() {
  const { isLoggedIn, userIcon, username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirect to the home page
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">Bad Bank</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          {!isLoggedIn && (
            <>
              <Nav.Link as={Link} to="/create-account">Create Account</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <Nav.Link as={Link} to="/withdraw">Withdraw</Nav.Link>
              <Nav.Link as={Link} to="/deposit">Deposit</Nav.Link>
              <Nav.Link as={Link} to="/balance">Balance</Nav.Link>
            </>
          )}
        </Nav>
        {isLoggedIn && 
          <div className="user-info">
            <div className="user-icon">{userIcon}</div>
            <div className="username">{username}</div>
            <Button variant="light" onClick={handleLogout}>Logout</Button> {/* Logout button */}
          </div>
        }
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
