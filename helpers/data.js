import axios from 'axios';

class Data {
    static saveApiResponse() {
        const sessionKey = 'multiplayerData';

        var data = sessionStorage.getItem(sessionKey);
        if (data === undefined || data === null) {
            getDataFromApi()
            .then((response) => {
                sessionStorage.setItem(sessionKey, JSON.stringify(response.data));
            });
        }
    }

    static getMultiplayerData() {
        const sessionKey = 'multiplayerData';
        return JSON.parse(sessionStorage.getItem(sessionKey));
    }
}

async function getDataFromApi() {
    const response = await axios.get('https://thevideogameapi.azurewebsites.net/v1/mass-effect-3');
    return response;
}

export default Data;