const mongoose = require("mongoose")


const noteSchema = new mongoose.Schema({
    title : String,
    description : String


})

const noteModel = mongoose.model("Note",noteSchema)
// Note naam ka model banaya, jo noteSchema ke rules ko follow karega.
// Is model ki madad se hum MongoDB database mein notes ko
// create, read, update aur delete (CRUD operations) kar sakte hain.



module.exports=noteModel