import data from './data';

class Randomizer {
    static init() {
        data.saveApiResponse();
    }

    static getRandomClass() {
        var multiplayerData = data.getMultiplayerData();
        var weaponClass = this._getRandomItemFromCollection(multiplayerData.weaponClasses);

        return {
            "character": this._getRandomItemFromCollection(multiplayerData.characters),
            "weapon": this._getRandomItemFromCollection(weaponClass.weapons)
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