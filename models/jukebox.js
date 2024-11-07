const mongoose = require(`mongoose`);

const jukeboxSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  coverArtUrl: {
    type: String,
    required: false,
  },
  songClipUrl: {
    type: String,
    required: false,
  },
  songLyrics: {
    type: String,
    required: false,
  },
  isApartAnAlbum: {
    type: Boolean,
    required: false,
  },
  yearOfRelease: {
    type: Number,
    required: true,
  },
});

const Jukebox = mongoose.model("Jukebox", jukeboxSchema);

module.exports = Jukebox;
