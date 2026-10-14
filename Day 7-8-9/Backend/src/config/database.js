const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()

function connectToDB(){
    mongoose.connect( process.env.MONGO_URI)
    .then( ()=>{
        console.log("Database connected successfully")
    })
}



module.exports = connectToDB