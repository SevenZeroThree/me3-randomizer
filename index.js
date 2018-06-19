import Randomizer from './helpers/randomizer';

class Index {
    constructor() {
        var character = Randomizer.getRandomCharacter();
        console.log(character);
    }
}

export default Index;

new Index();