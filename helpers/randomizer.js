import data from './data';

class Randomizer {
    static getRandomClass() {
        var randomizer = this;
        return data.getMultiplayerData()
            .then((response) => {
                var weaponClass = randomizer._getRandomItemFromCollection(response.weaponClasses);

                return {
                    "character": randomizer._getRandomItemFromCollection(response.characters),
                    "weapon": randomizer._getRandomItemFromCollection(weaponClass.weapons)
                };
            });
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