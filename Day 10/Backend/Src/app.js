const express = require("express");
const noteModel = require("./models/note.models");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json()); //middleware for parsing JSON request bodies

app.post("/api/note", async (req, res) => {
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

app.get("/api/note", async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    message: "read sucessfully",
    notes,
  });
});

app.delete("/api/note/:id", async (req, res) => {
  const id = req.params.id;

  await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "note deleted sucessfully ",
  });
});

app.patch("/api/note/:id", async (req, res) => {
  const id = req.params.id;
  const { description } = req.body;

  await noteModel.findByIdAndUpdate(id, { description });

  res.status(200).json({
    message: "update  sucussfullly",
    id,
  });
});

module.exports = app;
