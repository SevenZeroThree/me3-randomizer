import React, { Component} from "react";

import Character from './Character';
import Weapon from './Weapon';
import RegenerateButton from './RegenerateButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      character: {
        name: "My Character"
      },
      weapon: {
        name: "My Weapon"
      }
    }
  }

  handleRegenerate() {
      alert('Regenerating random class from App');
  }

  render() {
    return(
      <div>
        <Character character={ this.state.character} />
        <Weapon weapon={this.state.weapon} />
        <RegenerateButton regenerateHandler={() => this.handleRegenerate()} />
      </div>
    );
  }
}

export default App;