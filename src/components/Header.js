import React, { Component } from 'react';
import AlbumLinkPage from './AlbumLinkPage';
import SongLinkPage from './SongLinkPage';


class Header extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            audio: {}
        }
    }

    audioPlaying = new Audio(this.props.currentlyPlaying.previewUrl)

    playAudio(audio) {
        audio.play();
    }

    pauseAudio(audio) {
        audio.pause();
    }

    componentWillUpdate() {
        this.audioPlaying.pause(); 
        console.log(1)
        // this.audioPlaying = new Audio(this.props.currentlyPlaying.previewUrl)
    }

    render() {
        this.audioPlaying = new Audio(this.props.currentlyPlaying.previewUrl);
        console.log(2)
        if(this.audioPlaying) {
            this.audioPlaying.play();
        }

        return(
            <header className='header'>

                <div className='headerControlButtons'>
                    <div className='logo'>
                        <img src='https://sitejerk.com/images/apple-music-logo-transparent-9.png' className='logo'/>
                    </div>
                        
                    <div className='playIcons'>
                            <i class="fas fa-backward"></i>
                            <i onClick={() => this.playAudio(this.audioPlaying)} class="fas fa-play"></i>
                            <i onClick={() => this.pauseAudio(this.audioPlaying)} class="fas fa-pause"></i>
                            <i class="fas fa-forward"></i>
                    </div>

                </div>

                <div className='headerCurrentTrack'>
                        
                        <img className='currentAlbum' src={this.props.currentlyPlaying.artworkUrl100}/>
                            <div className='currentSongInfo'>
                                <div className='headerSong'>
                                    {this.props.currentlyPlaying.trackName}
                                </div>
                                
                                <div className='songInfo'>
                                {this.props.currentlyPlaying.artistName} - {this.props.currentlyPlaying.collectionName}
                                </div>
                            </div>
                        
                </div>

                <div className='headerSearch'>
                    <div className='searchBarContainer'>
                        <i class="fas fa-search"></i>

                        <input className='searchBar' placeholder='Search'></input>
                    </div>

                </div>
            </header>
        )
    }
}

export default Header;