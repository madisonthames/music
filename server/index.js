const express = require("express");
const dataController = require("./controllers/data")
const app = express();

app.use(express.json());

app.get('/api/newReleases', dataController.getNewReleases);
app.get('/api/topSongs', dataController.getTopSongs);
app.get('/api/topAlbums', dataController.getTopAlbums);

app.get('/api/newReleases/:id', dataController.getNewReleaseAlbum);
app.get('/api/topSongs/:id', dataController.getTopSongsLink);
app.get('/api/topAlbums/:id', dataController.getTopAlbumsAlbum);

app.post('/api/favorites', dataController.addSongToFavorites);


const SERVER_PORT = 5050;

app.listen(SERVER_PORT, () => {
    console.log(`Listening on ${SERVER_PORT}`);
});