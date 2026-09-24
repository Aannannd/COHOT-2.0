const express = require("express")

const app = express() // server  k insatnce ko create krte h

app.use(express.json()) // middleware

const notes =[]

app.post("/notes",(req , res )=>{
    console.log (req.body)
    notes.push(req.body)
    res.send("note created ")
})

app.get("/notes",(req,res) =>{
    res.send(notes)
})
app.listen (3000  , () => {
    console.log("running on port number 3000")
 })