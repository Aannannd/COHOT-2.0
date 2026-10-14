/* 

*/

const express = require("express")
const noteModel = require("./models/note.models")
const app = express()

app.use(express.json()) //middleware for parsing JSON request bodies

/* 
post
 */

app.post("/api/note",async(req,res)=>{
    const {title, description }= req.body
    const note = await noteModel.create({
        title , description
    })
    res.status(201).json({
        message: 'created sucessfully',
        note
    })
})

app.get("/api/note",async(req,res)=>{
    const notes = await noteModel.find()
    
     res.status(200).json({
        message: 'read sucessfully',
        notes
        
    })
})

app.delete("/api/note/:id",async(req,res)=>{
    const id = req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: "note deleted sucessfully ",
    })

})

app.patch("/api/note/:id", async(req,res)=>{
    const id = req.params.id
    const { description }= req.body

    await noteModel.findByIdAndUpdate(id,{description})

    res.status(200).json({
        message: "update  sucussfullly",id
        
    })
})


module.exports =app