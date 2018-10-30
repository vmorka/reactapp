import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <form>
            <input type="text" placeholder="Įveskite el. paštą"/>
            <input type="password" placeholder="Įveskite slaptažodį"/>
            <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default Login;
