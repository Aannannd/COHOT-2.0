const mongoose = require("mongoose")

const noteSchem = mongoose.Schema({
    title: String,
    description : String
})

const noteModel = mongoose.model("note", noteSchem)

module.exports= noteModel;
