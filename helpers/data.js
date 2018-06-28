import axios from 'axios';

const sessionKey = 'multiplayerData';

class Data {
    
    static getMultiplayerData() {
        var data = sessionStorage.getItem(sessionKey);
        if (data === undefined || data === null) {
            return saveApiResponse();
        }

        return Promise.resolve(JSON.parse(data));
    }
}

async function saveApiResponse() {
    return getDataFromApi()
        .then((response) => {
            sessionStorage.setItem(sessionKey, JSON.stringify(response.data));
            return response.data;
        });
    
}

async function getDataFromApi() {
    const response = await axios.get('https://thevideogameapi.azurewebsites.net/v1/mass-effect-3');
    return response;
}

export default Data;