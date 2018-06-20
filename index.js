import Randomizer from './helpers/randomizer';

class Index {
    constructor() {
        var randomClass = Randomizer.getRandomClass();
        alert(JSON.stringify(randomClass));
    }
}

export default Index;

new Index();