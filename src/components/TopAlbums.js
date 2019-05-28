import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class TopAlbums extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topAlbums: [],
        }
    }

    componentDidMount() {
        axios
        .get("/api/topAlbums")
        .then(response => {
            this.setState({ topAlbums: response.data.feed.results });
        })
        .catch(error => {
            this.setState({ error: "Oops, please try again."})
        });
    }

    render() {
        const { topAlbums } = this.state;

        return(
            <section className='releaseContainer'>
                <h2>Top Albums</h2>
                
            <div className='fullReleaseInfo'>
            {this.state.error} 
                    {topAlbums.map((topAlbum, index) => (
                        <div className='releaseInfo'>
                            <Link to={'./AlbumLinkPage/' + topAlbum.id}><img className='albumArt' src={topAlbum.artworkUrl100}/></Link>
                            <p className='artist'>{topAlbum.artistName}</p>
                            <p className='title'>{topAlbum.name}</p>
                        </div>
                    ))}
                </div>

            </section>
        )
    }
}

export default TopAlbums;