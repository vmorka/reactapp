import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <form>
          <input type="text" placeholder="Įveskite el. paštą"/>
          <input type="password" placeholder="Įveskite slaptažodį"/>
          <button type="submit">Prisijungti</button>
          <button type="button">bimbam</button>
        </form>
      </div>
    );
  }
}

export default Login;
