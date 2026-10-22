const express = require( "express");

const noteModel = require("./module/note.module")
const app = express();
app.use(express.json())

app.post("/api/notes",async(req,res) =>{
    const {title,description }=req.body
    const note = noteModel.create({
        title,description
    })
    res.status(201).json({
        message: "note created sucessfully",
        note
    })
    })




module.exports = app;