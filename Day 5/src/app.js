/* server ko banana  */
const express = require("express")

const app = express() // seerver start ho rh h 

app.use(express.json())

const notes = []

app.post("/notes",(req,res)=>{
     notes.push(req.body)
    res.status(201).json({
        message:"note created sucessfully "
    })
})

app.get("/notes",(req,res)=>{
    res.status(200).json({
        notes:notes
    })
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.status(204).json({
        message:"deleted sucessfully "
    })
})
 app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description
    res.status(200).json({
        message:"updated sucesssfully"
        
    })
 })

module.exports = app