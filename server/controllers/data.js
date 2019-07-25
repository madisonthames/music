const axios = require('axios');
const CircularJSON = require('circular-json');
const favorites = []

const getNewReleases = (req, res) => {
    axios
    .get('https://rss.itunes.apple.com/api/v1/us/apple-music/new-releases/all/50/explicit.json')
    .then(response => {
        let json = CircularJSON.stringify(response.data.feed.results);
        res.send(json);
    })
};

const getTopAlbums = (req, res) => {
    axios
    .get('https://rss.itunes.apple.com/api/v1/us/apple-music/top-albums/all/50/explicit.json')
    .then(response => {
        let json = CircularJSON.stringify(response.data.feed.results);
        console.log(response)
        res.send(json);
    })
  };

const getTopSongs = (req, res) => {
axios
.get('https://rss.itunes.apple.com/api/v1/us/apple-music/top-songs/all/50/explicit.json')
.then(response => {
    let json = CircularJSON.stringify(response.data.feed.results);
    res.send(json);
})
};


const getNewReleaseAlbum = (req, res) => {
    res.json(newReleases.feed.results.id)
}

const getTopSongsLink = (req, res) => {
    res.json(topSongs.feed.results.id)
}

const getTopAlbumsAlbum = (req, res) => {
    res.json(topAlbums.feed.results.id)
}

const addSongToFavorites = (req, res) => {
    favorites.push(req.body);
    res.json('it has been added')
}

module.exports = {
    getNewReleases,
    getTopSongs,
    getTopAlbums,
    getNewReleaseAlbum,
    getTopSongsLink,
    getTopAlbumsAlbum,
    addSongToFavorites
}