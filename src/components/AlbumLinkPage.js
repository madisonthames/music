import React, { Component } from 'react';
import axios from 'axios';
import { millisToMinutesAndSeconds, changeArtworkURL } from './Helpers';
import AddToFavorites from './AddToFavorites';

class AlbumLinkPage extends Component {
    constructor() {
        super(); 
        this.state = {
            songs: [],
            album: {}
        } 
    }

    getAlbumInfo(songs) {
      this.props.getAlbumInfo( songs );
  }

    componentDidMount() {
        const { id } = this.props.match.params

        axios
        .get(`https://itunes.apple.com/lookup?id=${id}&entity=song`).then(( album ) => {
            let collection = album.data.results.splice(0, 1)[0];
            console.log(album)
            this.setState({ songs: album.data.results })
            this.setState({ album: collection })
        })
    }

  render()  {
      const { songs } = this.state;
      const { album } = this.state;

  return (

    <div className="linkPage">

      <div className='image'>
        <img src={changeArtworkURL(album.artworkUrl100)}/>
      </div>

      <div className='linkFullInfo'>
            <div className='title'>
                <h1 className='linkPageTitle'>{album.collectionCensoredName}</h1>
                <h2 className='linkPageArtist'>{album.artistName}</h2>
                </div>
    
                <div className='typeRow'>
                <div>Song</div>
                <div>Artist</div>
                <div>Time</div>
            </div>
        
        {songs.map((song, index) => (

            <div className='songRow'>
                    <div>{index + 1}</div>
                    <div><i onClick={() => this.getAlbumInfo(song)} class="fas fa-play"></i></div>
                    <div className='songTitle'>{song.trackName}</div>
                    <div>{song.artistName}</div>
                    <button className='add' onClick={() => AddToFavorites(song)}>+</button>
                    <div>{millisToMinutesAndSeconds(song.trackTimeMillis)}</div>
            </div>
                        
        ))}
                

      </div>



    </div>
  );
}
}


export default AlbumLinkPage;