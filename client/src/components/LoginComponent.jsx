import React, { Component } from 'react';
import './styles/Login.css'

class LoginComponent extends Component {
  render() {
    return (
      <div className="login">
        <form>
          <input type="text" placeholder="Įveskite el. paštą"/>
          <input type="password" name="pass" placeholder="Įveskite slaptažodį"/>
          <button type="submit">Prisijungti</button>
        </form>
      </div>
    );
  }
}

export default LoginComponent;
