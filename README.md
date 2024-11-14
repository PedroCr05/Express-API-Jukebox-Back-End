# 🎶 Jukebox API 🎶

Welcome to the **Jukebox API**! This project is a backend server that allows users to manage their favorite music using full CRUD (Create, Read, Update, Delete) functionality. Users can add, view, update, and delete songs from their personal jukebox collection.

---

## 🚀 Features

- **Add New Track** - Users can add songs to their jukebox.
- **View All Tracks** - Retrieve a list of all songs in the jukebox.
- **View A Singular Track** - Only retrieves a song by it's Song ID.
- **Update Track Details** - Modify information about a song.
- **Delete Track** - Remove songs from the jukebox collection.

## 📜 Endpoints

| HTTP Method | Endpoint            | Description                  |
| ----------- | ------------------- | ---------------------------- |
| `POST`      | `/tracks`           | Add a new track              |
| `GET (ALL)` | `/tracks`           | View all tracks              |
| `GET (ID)`  | `/tracks/:tracksId` | View one track               |
| `PUT`       | `/tracks/:tracksId` | Update a specific track      |
| `DELETE`    | `/tracks/:tracksId` | Delete a specific trackTrack |

---
