import axios from 'axios';

class Randomizer {
    static getRandomClass() {
        axios.get('https://therandomizerapi.azurewebsites.net/v1/video-games/mass-effect-3/multiplayer')
            .then((response) => {
                return response;
            });
    }
}

export default Randomizer;