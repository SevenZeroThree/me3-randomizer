import React, { Component} from "react";

import Character from './Components/Character';
import Weapon from './Components/Weapon';
import RegenerateButton from './Components/RegenerateButton';

let randomResult = {
  character: {
    name: "My Character"
  },
  weapon: {
    name: "My Weapon"
  }
}

class App extends Component {
  render() {
    return(
      <div>
        <h1>Welcome to the React randomizer!</h1>
        <Character character={randomResult.character} />
        <Weapon weapon={randomResult.weapon} />
        <RegenerateButton />
      </div>
    );
  }
}

export default App;