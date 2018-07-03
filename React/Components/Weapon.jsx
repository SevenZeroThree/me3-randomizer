import React, { Component} from "react";
import PropTypes from 'prop-types';

class Weapon extends Component{
  render(){
    return(
      <div>
        <h1>{ this.props.weapon.name }</h1>
      </div>
    );
  }
}

Weapon.propTypes = {
    weapon: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
};

export default Weapon;