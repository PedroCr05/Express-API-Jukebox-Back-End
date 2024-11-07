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
  //   dateOfRelease: {
  //     type: String,
  //     required: true,
  //   },
});

const Jukebox = mongoose.model("Jukebox", jukeboxSchema);

module.exports = Jukebox;
