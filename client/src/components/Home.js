import React, { Component } from 'react';
import Footer from './Footer';
import { connect } from 'react-redux';
import { getMakes } from '../actions/makesActions'

class Home extends Component {
  componentDidMount() {
    this.props.getMakes();
  }

  render() {
    const { makes } = this.props.makes
    
    return (
      <div>
        <h4>Home Component</h4>
        <p>Čia vaizduojamas Home komponentas</p>
        <select>
          {makes.map(({Make_ID, Make_Name}) =>
            <option key={Make_ID}>{Make_Name}</option>
          )}
        </select>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  makes: state.makes
})

export default connect(mapStateToProps, { getMakes })(Home);