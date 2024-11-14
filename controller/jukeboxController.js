const Jukebox = require(`../models/jukebox.js`);
const express = require(`express`);
const router = express.Router();

router.get(`/`, async (req, res) => {
  try {
    const fetchTracks = await Jukebox.find({});
    res.json(fetchTracks);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

router.get(`/:tracksId`, async (req, res) => {
  try {
    const getTrack = await Jukebox.findById(req.params.tracksId);
    if (!getTrack) {
      res.status(404);
      throw new Error(`Track has not been found.`);
    }
    res.status(200).json(getTrack);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: `Not a valid ID` });
    }
  }
});

router.post(`/`, async (req, res) => {
  try {
    const createTrack = await Jukebox.create(req.body);
    res.status(201).json(createTrack);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put(`/:tracksId`, async (req, res) => {
  try {
    const updateTrack = await Jukebox.findByIdAndUpdate(
      req.params.tracksId,
      req.body,
      { new: true }
    );
    if (!updateTrack) {
      res.status(404);
      throw new Error(`Track has not been found.`);
    }
    res.status(200).json(updateTrack);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

router.delete(`/:tracksId`, async (req, res) => {
  try {
    const deleteTrack = await Jukebox.findByIdAndDelete(req.params.tracksId);
    if (!deleteTrack) {
      res.status(404);
      throw new Error(`Track has not been found.`);
    }
    res.status(201).json(deleteTrack);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

module.exports = router;
