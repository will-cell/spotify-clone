import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import Player from './Player'
import { getTokenFromUrl } from './spotify';
import SpotiyWebApi from 'spotify-web-api-js'
import { useStateValue } from './DataLayer'


const spotify = new SpotiyWebApi();
const axios = require('axios');


function App() {

    
    const [{ user, token }, dispatch] = useStateValue(); 

    

    useEffect(() => {
        const hash = getTokenFromUrl()
        const _token = hash.access_token
        if (_token) {

            dispatch({
                type: 'SET_TOKEN', 
                token:_token,
            })

            spotify.setAccessToken(_token);

            spotify.getMe().then(user => {
                dispatch({
                type: 'SET_USER', 
                user
            })
            });

            spotify.getUserPlaylists().then((playlists) => {
                dispatch({
                    type: 'SET_PLAYLISTS', 
                    playlists: playlists
                })
            })

            spotify.getPlaylist('37i9dQZEVXcGHdMIw8gOig').then((response) => {
                dispatch({
                    type: 'SET_DISCOVER_WEEKLY', 
                    discover_weekly: response, 
                })
            })



            spotify.getArtist('0OdUWJ0sBjDrqHygGUXeCF').then((response) => {
                dispatch({
                    type: 'SET_SEARCH_ARTIST',
                    search : response,
                })
            })

            
        }
    }, [])

    console.log('i have a token : ', token);

    

    
    console.log(user);


    return (
        
        <div className="app" >
            
            {
                token ?
                (
                    <Player spotify={spotify} />
                )
                    :
                (
                    <Login />
                )
            }
    </div>
    
  );
}

export default App;
