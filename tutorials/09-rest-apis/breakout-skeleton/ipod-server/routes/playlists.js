var express = require('express');
var router = express.Router();

// ... mounts to /playlists/
router.get('/', function(req, res, next) {
  let playlists = req.dataStorage.getAllPlaylists();
  res.json({
    playlists: playlists
  })
});

// ... mounts to /playlists/:playlistId
router.get('/:playlistId', function(req, res, next) {
  // get the value of the here so called :playlistId placeholder
  let playlistId = req.params.playlistId;
  // get the playlist metadata from the data storage
  let playlist = req.dataStorage.getPlaylistById(playlistId);

  // send only meta data (no songs), to reduce data traffic
  res.send({
    id: playlist.id,
    name: playlist.name
  })
});

// TODO add other playlists API endpoints here

router.get('/:playlistId/songs', function(req, res, next) {
  let playlistId = req.params.playlistId;
  let songs = req.dataStorage.getSongsOfPlaylist(playlistId);
  res.send(songs);
});

router.get('/:playlistId/songs/:trackId', function(req, res, next) {
  let trackId = req.params.trackId;
  res.location(`/songs/${trackId}`).status(301).send();
});

router.post('/:playlistId/songs/:trackId', function (req, res, next) {
  let playlistId = req.params.playlistId;
  let trackId = req.params.trackId;
  let created = req.dataStorage.addSongToPlaylist(playlistId, trackId, false);
  if (created) {
    res.sendStatus(201);
  } else {
    res.sendStatus(500);
  }
});

router.put('/:playlistId/songs/:trackId', function (req, res, next) {
  let playlistId = req.params.playlistId;
  let trackId = req.params.trackId;
  let created = req.dataStorage.addSongToPlaylist(playlistId, trackId, true);
  if (created) {
    res.sendStatus(201);
  } else {
    res.sendStatus(500);
  }
});

module.exports = router;
