const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()

function connectTOoDB(){
    mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("connected to DB")
        })
    
    }
    
module.exports = connectTOoDB


