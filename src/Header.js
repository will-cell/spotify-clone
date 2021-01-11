import React, {useEffect} from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import { useStateValue } from './DataLayer'

function Header({spotify}) {

    const [{ user }, dispatch] = useStateValue(); 

    let toSearch = ''

    useEffect(() => {

        spotify.searchArtists('DAMSO').then((response) => {
                dispatch({
                    type: 'SET_SEARCH_ARTIST',
                    search : response,
                })
        })
        
    }, [])
    
    const handleSumbit = (e) => {
        toSearch = e.target.value
        console.log(toSearch);
    }



    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder="search artists, songs, podcasts"
                    onChange = {(e) => handleSumbit(e)}
                    type="text"
                />
            </div>

            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name} </h4>
            </div>
        </div>
    )
}


export default Header
