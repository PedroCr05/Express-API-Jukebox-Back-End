# 🎶 Jukebox API 🎶

Welcome to the **Jukebox API**! This project is a backend server that allows users to manage their favorite music using full CRUD (Create, Read, Update, Delete) functionality. Users can add, view, update, and delete songs from their personal jukebox collection.

---

## 📁 Project Structure

The project includes a JSON template located in the `json` folder, which provides an example structure of how songs should be formatted when added to the jukebox. This template will help users understand the expected data format.

---

## 🚀 Features

- **Add New Song** - Users can add songs to their jukebox.
- **View All Songs** - Retrieve a list of all songs in the jukebox.
- **View A Singular Song** - Only retrieves a song by it's Song ID.
- **Update Song Details** - Modify information about a song.
- **Delete Song** - Remove songs from the jukebox collection.

## 📜 Endpoints

| HTTP Method | Endpoint           | Description            |
| ----------- | ------------------ | ---------------------- |
| `POST`      | `/jukebox`         | Add a new song         |
| `GET (ALL)` | `/jukebox`         | View all songs         |
| `GET (ID)`  | `/jukebox/:songId` | View one song          |
| `PUT`       | `/jukebox/:songId` | Update a specific song |
| `DELETE`    | `/jukebox/:songId` | Delete a specific song |

---
