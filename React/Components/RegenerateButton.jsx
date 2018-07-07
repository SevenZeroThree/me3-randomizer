import React, { Component } from "react";
import PropTypes from 'prop-types';

class RegenerateButton extends Component {
    render() {
        return(
            <div>
                <button className="btn btn--info btn--large" onClick={() => this.props.regenerateHandler()}>Regenerate</button>
            </div>
        );
    }
}

RegenerateButton.propTypes = {
    regenerateHandler: PropTypes.func.isRequired
};

export default RegenerateButton;