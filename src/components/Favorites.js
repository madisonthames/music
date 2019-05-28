// import React, { Component } from 'react';
// import axios from 'axios';


// class Favorites extends Component {
//     constructor() {
//         super();
//         this.state = {
//             favorites: []
//         }
//     }

//     render() {
//         return(
//             <div className="linkPage">

//                 <div className='image'>
//                     <img src={changeArtworkURL(album.artworkUrl100)}/>
//                 </div>

//                 <div className='linkFullInfo'>
//                         <div className='title'>
//                             <h1 className='linkPageTitle'>{album.collectionCensoredName}</h1>
//                             <h2 className='linkPageArtist'>{album.artistName}</h2>
//                             </div>
                
//                             <div className='typeRow'>
//                             <div>Song</div>
//                             <div>Artist</div>
//                             <div>Time</div>
//                         </div>
//                 </div>

//                 <div className='songRow'>
//                         <div>{index + 1}</div>
//                         <div><i class="fas fa-play"></i></div>
//                         <div className='songTitle'>{song.trackName}</div>
//                         <div>{song.artistName}</div>
//                         <button className='add' onClick={() => AddToFavorites(song)}>+</button>
//                         <div>{millisToMinutesAndSeconds(song.trackTimeMillis)}</div>
//                 </div>
//             </div>
//         )
//     }
// }