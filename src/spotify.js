export const authEndpoint = "https://accounts.spotify.com/authorize";

export const searchEndpoint = "https://api.spotify.com/v1/search"

const redirectUri = "http://localhost:3000/";

const clientId = "1f2a10c7bf8b4b92b631a26845c0641d";

const scopes = [
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'user-read-currently-playing',
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1])

            return initial
        }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`

export const searchUrl = `${searchEndpoint}?q=name:abba&type=album,artist`