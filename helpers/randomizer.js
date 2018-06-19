import data from '../data.json';

class Randomizer {
    static getRandomCharacter() {
        return data.characters.length;
    }
}

export default Randomizer;