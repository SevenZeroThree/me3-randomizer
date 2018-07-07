import React from "react";
import PropTypes from 'prop-types';

function Weapon(props) {
    return (
        <div className="feature__item">
            <div className="archive__item">
                <div className="archive__item-body">
                    <h2 className="archive__item-title">{ props.weapon.name }</h2>
                </div>
            </div>
        </div>
    );
}

Weapon.propTypes = {
    weapon: PropTypes.shape({
        name: PropTypes.string.isRequired
    }).isRequired
};

export default Weapon;