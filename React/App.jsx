import React, { Component} from "react";

import Character from './Components/Character';
import Weapon from './Components/Weapon';
import RegenerateButton from './Components/RegenerateButton';

import Randomizer from '../helpers/randomizer';

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

    this.generateRandomClass();
  }

  generateRandomClass() {
    Randomizer.getRandomClass()
      .then((randomClass) => {
          this.setState({character: randomClass.character});
          this.setState({weapon: randomClass.weapon});
      });
  }

  render() {
    return(
      <div>
        <div className="feature__wrapper">
          <Character character={ this.state.character} />
          <Weapon weapon={this.state.weapon} />
        </div>
        <RegenerateButton regenerateHandler={() => this.generateRandomClass()} />
      </div>
      
    );
  }
}

export default App;