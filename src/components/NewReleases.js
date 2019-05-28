import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class NewReleases extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newReleases: [],
        }
    }

    componentDidMount() {
        axios
        .get("/api/newReleases")
        .then(response => {
            this.setState({ newReleases: response.data.feed.results });
        })
        .catch(error => {
            this.setState({ error: "Oops, please try again."})
        });
    }

    render() {
        const { newReleases } = this.state;

        return(

            <div className='releaseContainer'>
                <h2>New Releases</h2>
                
                <div className='fullReleaseInfo'>
                    {this.state.error} 
                    {newReleases.map((newRelease, index) => (
                        <div className='releaseInfo'>
                            <Link to={'./AlbumLinkPage/' + newRelease.id}><img className='albumArt' src={newRelease.artworkUrl100}/></Link>
                            <p className='artist'>{newRelease.artistName}</p>
                            <p className='title'>{newRelease.name}</p>    
                        </div>
                    ))}
                </div>

            </div>
           
        )
    }
}

export default NewReleases;