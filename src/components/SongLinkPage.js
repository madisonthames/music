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

    <div className="linkPage">

      <div className='image'>
        <img src={changeArtworkURL(track.artworkUrl100)}/>
      </div>

      <div className='linkFullInfo'>
            <div className='title'>
                <h1 className='linkPageTitle'>{track.collectionCensoredName}</h1>
                <h2 className='linkPageArtist'>{track.artistName}</h2>
                </div>
    
                <div className='typeRow'>
                <div>Song</div>
                <div>Artist</div>
                <div>Time</div>
            </div>
        
            <div className='songRow'>
                    <div>1</div>
                    <div><i onClick={() => this.getSongInfo(track)} class="fas fa-play"></i></div>
                    <div className='songTitle'>{track.trackName}</div>
                    <div>{track.artistName}</div>
                    <button className='add' onClick={() => AddToFavorites(track)}>+</button>
                    <div>{millisToMinutesAndSeconds(track.trackTimeMillis)}</div>
            </div>
                

      </div>



    </div>
  );
}
}


export default SongLinkPage;