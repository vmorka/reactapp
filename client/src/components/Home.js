import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMakes } from '../actions/makesActions'
import './styles/Home.css'

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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  makes: state.makes
})

export default connect(mapStateToProps, { getMakes })(Home);
