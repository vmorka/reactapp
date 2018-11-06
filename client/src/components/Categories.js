import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategories } from '../actions/categoryActions';
import PropTypes from 'prop-types';

class Categories extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.getCategories();
  }

  render() {
    return (
      <div className="categoriesList">
        <ul>
          {/* {this.state.categories.map(category =>
            <li key={category.id}>{category.name}</li>  
          )} */}
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  getCategories: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  category: state.category
});

export default connect(mapStateToProps, { getCategories })(Categories);
