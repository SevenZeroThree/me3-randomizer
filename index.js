import Randomizer from './helpers/randomizer';

class Index {
    constructor() {
        var randomClass = Randomizer.getRandomClass();
        console.log(randomClass);
    }
}

export default Index;

new Index();