import React, { Component } from "react";
import PropTypes from 'prop-types';

class Character extends Component {
    render() {
        return (
            <div>
                <h1>{ this.props.character.name }</h1>
            </div>
        );
    }
}

Character.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
};

export default Character;