import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <form>
            <input type="text" placeholder="Įveskite el. paštą"/>
            <input type="password" placeholder="Įveskite slaptažodį"/>
            <button type="submit">Prisijungti</button>
            <h1>nx</h1>
        </form>
      </div>
    );
  }
}

export default Login;