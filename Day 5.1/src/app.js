const express = require("express")
const app = express()
app.use(express.json())
const notes = []

app.post("/notes",()=>{
   notes.push(req.body)
   res.status(201).json({
        message:"note created sucessfully "
    })
  
  

})
app.get("/notes",(req,res)=>{
   

})
app.patch("/notes",(req,res)=>{
    
})
app.delete("/notes",(req,res)=>{
    
})
app.put("/notes",(req,res)=>{
    
})

 module.exports = app