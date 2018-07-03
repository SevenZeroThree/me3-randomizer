import React, { Component} from "react";

import Character from './Components/Character';
import Weapon from './Components/Weapon';

class App extends Component{
  render(){
    return(
      <div>
        <h1>Welcome to the React randomizer!</h1>
        <Character />
        <Weapon />
      </div>
    );
  }
}

export default App;