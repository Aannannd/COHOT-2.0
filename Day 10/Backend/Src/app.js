const express = require("express");
const noteModel = require("./model/note.model");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); //middleware for parsing JSON request bodies
const path = require("path") //path module ka use hum file path ko join krne k liye krte h
app.use(express.static("./public"))// public folder ko  publically abliblr kr deta h 



app.post("/api/notes", async (req, res) => {
  const { title, description } = req.body; // user n jo send kiya vo req.body k andar aa gya , req.body se humne title aur description ko alag alag nikal liya
  const note = await noteModel.create({
    title,
    description,
  });
  res.status(201).json({
    message: "created sucessfully",
    note,
  });
});

app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    message: "read sucessfully",
    notes,
  });
});

app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "note deleted sucessfully ",
  });
});

app.patch("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;

  await noteModel.findByIdAndUpdate(id, { description });

  res.status(200).json({
    message: "update  sucussfullly",
    id,
  });
});
console.log(__dirname)
app.use("/*name", (req, res) => {
  res.sendFile(path.join(__dirname,"..","public/index.html"))
});

module.exports = app;
