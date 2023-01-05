// DEPENDENCIES

// get .env vars
require("dotenv").config();

// get port and db url
const { PORT, DATABASE_URL } = process.env;
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

// DATABASE CONNECTION
mongoose.connect(DATABASE_URL);
// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to MongoDB"))
  .on("close", () => console.log("You are disconnected from MongoDB"))
  .on("error", (error) => console.log(error));

// MODEL
const BookmarkSchema = new mongoose.Schema({
  name: String,
  image: String,
  title: String,
});

const Bookmark = mongoose.model("Bookmark", BookmarkSchema);

// MIDDLEWARE
app.use(cors()); // prevents cross origin resource sharing errors, allows access to server from all origins i.e. react frontend
app.use(morgan("dev")); // loggs details of all server hits to terminal
app.use(express.json()); // parse json bodies from request
app.use(express.urlencoded({ extended: false })); // to use URL encoded

// ROUTES IDUC

app.get("/", (req, res) => {
  res.send("hello world");
});

// INDEX
app.get("/bookmark", async (req, res) => {
  try {
    res.status(200).json(await Bookmark.find({}));
  } catch (error) {
    res.status(400).json(error);
  }
});

// CREATE
app.post("/bookmark", async (req, res) => {
  try {
    res.status(200).json(await Bookmark.create(req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

// DELETE
app.delete("/bookmarks/:id", async (req, res) => {
  try {
    res.json(await Bookmark.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

// UPDATE
app.put("/bookmarks/:id", async (req, res) => {
  try {
    res.json(await Bookmark.findByIdAndUpdate(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

// LISTENER
app.listen(PORT, () =>
  console.log(`Listening to the smoothe sounds of PORT ${PORT}`)
);
