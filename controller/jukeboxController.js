const Jukebox = require(`../models/jukebox.js`);
const express = require(`express`);
const router = express.Router();

router.get(`/`, async (req, res) => {
  try {
    const fetchSongs = await Jukebox.find({});
    res.json(fetchSongs);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get(`/:songId`, async (req, res) => {
  try {
    const getSong = await Jukebox.findById(req.params.songId);
    if (!getSong) {
      res.status(404);
      throw new Error(`Song has not been found.`);
    }
    res.status(201).json(getSong);
  } catch (e) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

router.post(`/`, async (req, res) => {
  try {
    const createSong = await Jukebox.create(req.body);
    res.status(201).json(createSong);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});
