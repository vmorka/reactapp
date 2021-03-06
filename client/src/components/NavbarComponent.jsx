import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'

class NavbarComponent extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Log In</Link>
      </div>
    );
  }
}

export default NavbarComponent;
