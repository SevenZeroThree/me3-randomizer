import React from "react";
import PropTypes from 'prop-types';

function Character(props) {
    return (
        <div className="feature__item">
            <div className="archive__item">
                <div className="archive__item-body">
                    <h2 className="archive__item-title">{ props.character.name }</h2>
                </div>
            </div>
        </div>
    );
}

Character.propTypes = {
    character: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
};

export default Character;