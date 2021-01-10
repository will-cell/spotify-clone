import React from 'react'
import './Footer.css'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    className= " footer_albumLogo"
                    src=""
                    alt="" />
                <div className="footer__songInfo">
                    <h4>No song is palying</h4>
                    <p>...</p>
                </div>
            </div>


            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineOutlinedIcon fontSize='large' className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>


            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby='continuous-slider'/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
