/* 
server ko create krna 

*/

const express = require("express")
const noteModel = require("./models/notes.model")

const app = express();

app.use(express.json()) // middleware iske bine data (req.body) m nahi aayega 

app.post("/notes",async (req,res)=>{
   const {title, description }= req.body // reqq.body m jo data aaya th usko destructure krke title aur description m store krdia
//await ka use isliye kiya h ki jab tak note create nhi ho jata h tab tak ye code ruk jaye aur note create hone k bad hi aage ka code chale
// await ka use krne k liye function ko async banana padta h
   const note= await noteModel.create({ // jo bhi note create hoga noteModel ke andar usko store krenge note variable m aur noteModel ke andar title aur description ko store krenge jo req.body m aaya h
        title, description
    })

    res.status(201).json({
        message : "note created successfully",
        note
    })
})

module.exports=app