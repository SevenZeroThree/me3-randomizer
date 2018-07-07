import React, { Component } from "react";
import PropTypes from 'prop-types';

class Character extends Component {
    render() {
        return (
            <div className="feature__item">
                <div className="archive__item">
                    <div className="archive__item-body">
                        <h2 className="archive__item-title">{ this.props.character.name }</h2>
                    </div>
                </div>
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