import Randomizer from '../helpers/randomizer';

var randomClass = Randomizer.getRandomClass();

var characterDiv = document.getElementById('character');
characterDiv.children[0].innerHTML = randomClass.character.name;

var weaponDiv = document.getElementById('weapon');
weaponDiv.children[0].innerHTML = randomClass.weapon.name;