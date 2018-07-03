import React, { Component } from "react";

class RegenerateButton extends Component {
    handleClick() {
        alert('Regenerate button clicked!');
    }
    render() {
        return(
            <div>
                <button onClick={() => this.handleClick()}>Regenerate</button>
            </div>
        );
    }
}

export default RegenerateButton;