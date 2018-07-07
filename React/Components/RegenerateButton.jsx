import React from "react";
import PropTypes from 'prop-types';

function RegenerateButton(props) {
    return (
        <button className="btn btn--info btn--large" onClick={props.regenerateHandler}>Regenerate</button>
    );
}

RegenerateButton.propTypes = {
    regenerateHandler: PropTypes.func.isRequired
};

export default RegenerateButton;