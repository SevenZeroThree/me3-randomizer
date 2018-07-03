import React, { Component } from "react";
import PropTypes from 'prop-types';

import Character from './Character';
import Weapon from './Weapon';
import RegenerateButton from './RegenerateButton';

class Randomizer extends Component {
    render() {
        return (
            <div>
                <Character character={ this.props.randomClass.character} />
                <Weapon weapon={this.props.randomClass.weapon} />
                <RegenerateButton />
            </div>
        );
    }
}

Randomizer.propTypes = {
    randomClass: PropTypes.shape({
        character: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired,
        weapon: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default Randomizer;