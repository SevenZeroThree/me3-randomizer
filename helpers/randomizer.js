import data from '../data.json';

class Randomizer {
    static getRandomCharacter() {
        return this.getRandomItemFromCollection(data.characters);
    }

    static getRandomItemFromCollection(collection) {
        var numberOfItems = collection.length >>> 0;
        return collection[Math.floor(Math.random() * numberOfItems)];
    }
}

export default Randomizer;