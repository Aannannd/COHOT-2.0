/* server ko create krne 
server ko config krna 
 */

const express= require("express")

const app = express()

app.use(express.json())

const notes = []

app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)
    res.send("note created")
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/:index",(req,res)=>{
    delete notes[req.params.index]
    res.send("deleted sucessfully")
})

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description
    res.send("updated sucessfully")
})




module.exports = app