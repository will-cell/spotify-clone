import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login'
import Player from './Player'
import { getTokenFromUrl } from './spotify';
import SpotiyWebApi from 'spotify-web-api-js'
import { useStateValue } from './DataLayer'


const spotify = new SpotiyWebApi();


function App() {
    
    const [token, setToken] = useState(null)
    const [{ user }, dispatch] = useStateValue(); 


    useEffect(() => {
        const hash = getTokenFromUrl()
        window.location.hash = ""
        const _token = hash.access_token

        if (_token) {
            setToken(_token)

            spotify.setAccessToken(_token);

            spotify.getMe().then(user => {
                dispatch({
                type: 'SET_USER', 
                user
            })
            });

            


        }

        console.log('i have a token : ', token);
    }, [])

    console.log(user);

    return (
        
        <div className="app" >
            
            {
                token ?
                (
                    <Player/>
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
