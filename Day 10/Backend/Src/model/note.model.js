const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    title : String,
    description : String,
})

const notemodel = mongoose.model("note 10",noteSchema)


module.exports= notemodel;

