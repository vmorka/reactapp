import React, { Component } from 'react';
import Footer from './Footer';
import './styles/Main.css';

class Main extends Component {
  render() {
    return (
      <div>
        <h4>Main Component</h4>
        <p>Čia vaizduojamas Main komponentas</p>
        <Footer />
      </div>
    );
  }
}

export default Main;
