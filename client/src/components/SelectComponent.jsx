import React, { Component } from "react";

class SelectComponent extends Component {
  constructor(props) {
    super(props);
    this.props.initialMakes();
  }

  render() {
    const { makes, handleOnChange, models } = this.props;

    return (
      <div>
        <select onChange={handleOnChange}>
          {makes.map(({ make_id, make_name }) => (
            <option value={make_id} key={make_id}>
              {make_name}
            </option>
          ))}
        </select>

        <select>
          {models.map(({ model_id, model_name }) => (
            <option value={model_id} key={model_id}>
              {model_name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectComponent;
