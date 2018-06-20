import data from '../data.json';

class Randomizer {
    static getRandomClass() {
        return {
            "character": this.getRandomCharacter(),
            "weapon": this.getRandomWeapon()
        };
    }

    static getRandomCharacter() {
        return this._getRandomItemFromCollection(data.characters);
    }

    static getRandomWeapon() {
        var weaponClass = this._getRandomItemFromCollection(data.weapons);
        return this._getRandomItemFromCollection(weaponClass.members);
    }

    static _getRandomItemFromCollection(collection) {
        var numberOfItems = collection.length >>> 0;
        return collection[Math.floor(Math.random() * numberOfItems)];
    }
}

export default Randomizer;