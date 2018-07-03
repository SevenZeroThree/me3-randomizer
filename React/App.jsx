import React, { Component} from "react";

import Randomizer from './Components/Randomizer';

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
        <Randomizer randomClass={randomResult} />
      </div>
    );
  }
}

export default App;