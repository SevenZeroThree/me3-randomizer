import Randomizer from '../helpers/randomizer';

class JavaScriptRandomizer {
    static generate() {
        var randomClass = Randomizer.getRandomClass();

        var characterDiv = document.getElementById('character');
        characterDiv.children[0].innerHTML = randomClass.character.name;
        
        var weaponDiv = document.getElementById('weapon');
        weaponDiv.children[0].innerHTML = randomClass.weapon.name;
    }
}

Randomizer.init();

// TODO: do this differently...
setTimeout(() => JavaScriptRandomizer.generate(), 1000);

document.getElementById('regenerate-button').addEventListener('click', function(event) {
    event.preventDefault();
    
    JavaScriptRandomizer.generate();
});