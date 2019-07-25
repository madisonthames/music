import React, { Component } from 'react';
import axios from 'axios';
import AlbumLinkPage from './AlbumLinkPage';
import SongLinkPage from './SongLinkPage';
import { Link } from 'react-router-dom';
import Logo from './Logo';


class Header extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            audio: {}
        }
    }

    // audioPlaying = new Audio(this.props.currentlyPlaying.previewUrl)

    playAudio(audio) {
        audio.play();
    }

    pauseAudio(audio) {
        audio.pause();
    }

    componentWillUpdate() {
        this.audioPlaying.pause(); 
    }

    render() {
        this.audioPlaying = new Audio(this.props.currentlyPlaying.previewUrl);
        if(this.audioPlaying) {
            this.audioPlaying.play();
        }

        return(
            <header className='header'>
      
                        <section className='fullLogo'>
                            < Logo />
                            <div><h2 className='homeHeaderName'>iMusic</h2></div>
                        </section>



                    <section className='headerCurrentTrack'>
                            
                            <div className='currentAlbum'>
                                <img className='currentAlbumImage' src={this.props.currentlyPlaying.artworkUrl100}/>
                            </div>

                            <div className='currentSongInfo'>
                            <div className='headerSong'>
                                    
                                        {this.props.currentlyPlaying.trackName}

                                    <div className='songInfo'>
                                        {this.props.currentlyPlaying.artistName} - {this.props.currentlyPlaying.collectionName}
                                    </div>
                            </div>
                            </div>

                                            
                    

                        <section className='playIcons'>
                                    <i onClick={() => this.playAudio(this.audioPlaying)} class="fas fa-play"></i>
                                    <i onClick={() => this.pauseAudio(this.audioPlaying)} class="fas fa-pause"></i>
                        </section>  
                </section>
            </header>
        )
    }
}

export default Header;