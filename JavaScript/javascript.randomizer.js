import Randomizer from '../helpers/randomizer';

function generate() {
    Randomizer.getRandomClass()
        .then((randomClass) => {
            var characterDiv = document.getElementById('character');
            characterDiv.children[0].innerHTML = randomClass.character.name;
            
            var weaponDiv = document.getElementById('weapon');
            weaponDiv.children[0].innerHTML = randomClass.weapon.name;
        })
}

generate();

document.getElementById('regenerate-button').addEventListener('click', function(event) {
    event.preventDefault();
    
    generate();
});