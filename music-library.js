
// Library class
var Library = function(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

// Add a new playlist in a library
Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

// Playlist class
var Playlist = function(name) {
  this.name = name;
  this.tracks = [];
  this.overall = 0;
  this.duration = 0;
}

// Add a new track in a playlist
Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

// Each Playlist also has an overallRating function
// which will calculate the rating by averaging the
// rating of its tracks
Playlist.prototype.overallRating = function() {
  const totalTracks = this.tracks.length;
  let totalRating = 0;
  this.tracks.forEach(function(track) {
    totalRating += track.rating;
  });
  this.overall = totalRating / totalTracks;
}

// Each Playlist also has a totalDuration function
// which will sum the duration of all of its tracks
Playlist.prototype.totalDuration = function() {
  let totalLength = 0;
  this.tracks.forEach(function(track) {
    totalLength += track.length;
  });
  this.duration = totalLength;
}

// Track class
var Track = function(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

// 1 - we create the tracks
var track1 = new Track('Imagine Dragons - Whatever it takes', 10, 5);
var track2 = new Track('Oasis - Dont look back in anger', 8, 3);
var track3 = new Track('One Republic - Apologize', 7, 4);
var track4 = new Track('Aerosmith - I dont want to miss a thing', 9, 2);
var track5 = new Track('Anitta - Paradinha', 5, 7);
var track6 = new Track('Britney Spears - Baby one more time', 2, 5);

// 2 - we create the playlists
var playlist1 = new Playlist('Good music');
var playlist2 = new Playlist('Bad music');

// 3 - we create the library
var myLibrary = new Library('Some good and bad music','Giovani');

// 4 - we add tracks to the playlists and run playlist functions
playlist1.addTrack(track1);
playlist1.addTrack(track2);
playlist1.addTrack(track3);
playlist1.addTrack(track4);
playlist1.totalDuration();
playlist1.overallRating();

playlist2.addTrack(track5);
playlist2.addTrack(track6);
playlist2.totalDuration();
playlist2.overallRating();

//5 - we add the playlists in the library
myLibrary.addPlaylist(playlist1);
myLibrary.addPlaylist(playlist2);

console.log(myLibrary);