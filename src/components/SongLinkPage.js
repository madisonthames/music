import React, { Component } from 'react';
import axios from 'axios';
import { millisToMinutesAndSeconds, changeArtworkURL } from './Helpers';
import AddToFavorites from './AddToFavorites';


class SongLinkPage extends Component {
    constructor() {
        super(); 
        this.state = {
            track: {}
        } 
    }

    getSongInfo(song) {
        this.props.getSongInfo( song );
    }

    componentDidMount() {
        const { id } = this.props.match.params

        axios
        .get(`https://itunes.apple.com/lookup?id=${id}&entity=song`).then(( response ) => {
            console.log(response);
            this.setState({ track: response.data.results[0] })
        })
    }

        

  render()  {
      const { track } = this.state;   

  return (

    <div className="songLinkPage">

      <div className='songLinkPageImageContainer'>
        <img className='songLinkPageImage' src={changeArtworkURL(track.artworkUrl100)}/>
      </div>

      <div className='songLinkPageFullInfo'>
            <div className='title'>
                <h1 className='songLinkPageMainTitle'>{track.collectionCensoredName}</h1>
                <h2 className='songLinkPageArtist'>{track.artistName}</h2>
                </div>
    
                <div className='songLinkPageTypeRow'>
                <div>Song</div>
                <div>Artist</div>
                <div>Time</div>
            </div>
        
            <div className='songRowLinkPage'>
                <div className='songRowLinkPageFirstHalf'>
                    <div className='songLinkPageNumber'>1</div>
                    <div className='songLinkPageRowPlay'><i onClick={() => this.getSongInfo(track)} class="fas fa-play"></i></div>
                    <div className='songLinkPageTitle'>{track.trackName}</div>
                </div>

                <div className='songRowLinkPageSecondHalf'>
                    <div className='songRowLinkPageArtist'>{track.artistName}</div>
                    <button className='add' onClick={() => AddToFavorites(track)}>+</button>
                    <div>{millisToMinutesAndSeconds(track.trackTimeMillis)}</div>
                </div>
            </div>
                

      </div>
    </div>
  );
}
}


export default SongLinkPage;