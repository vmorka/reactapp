import React, { Component } from 'react';
import './styles/Home.css'

class SelectComponent extends Component {
  constructor (props) {
    super(props)
    this.props = props
    const { initialMakes } = this.props
    initialMakes()
  }

  render() {
    const { makes, handleOnChange } = this.props

    return (
      <div>

        <select onChange={handleOnChange}>
          {makes.map(({make_id, make_name}) =>
            <option value={make_id} key={make_id}>{make_name}</option>
          )}
        </select>
        
      </div>
    );
  }
}

export default SelectComponent;
