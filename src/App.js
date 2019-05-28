import React, {Component} from 'react';
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import AlbumLinkPage from './components/AlbumLinkPage';
import SongLinkPage from './components/SongLinkPage';

class App extends Component {
  constructor() {
    super(); 
    this.state = {
        currentlyPlaying: {}    
    } 

    this.getSongInfo = this.getSongInfo.bind(this);
    this.getAlbumInfo = this.getAlbumInfo.bind(this);
}

  getSongInfo = (song) => {
    this.setState({ currentlyPlaying: song })
  }

  getAlbumInfo = (songs) => {
    this.setState({ currentlyPlaying: songs})
  }

  render() {
  return (
    <div>

      <header>
        <Header currentlyPlaying={this.state.currentlyPlaying}/>
      </header>

      <Router>
        <switch>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/AlbumLinkPage/:id' render={props => ( <AlbumLinkPage {...props} getAlbumInfo={this.getSongInfo}/> )}/>
        <Route path='/SongLinkPage/:id' render={props => ( <SongLinkPage {...props} getSongInfo={this.getSongInfo}/> )}/>
        </switch>
      </Router>
      
    </div>

  );
}
}


export default App;

