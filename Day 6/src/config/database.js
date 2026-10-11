

require("dotenv").config() // ye line hume .env file ke andar jo bhi variable h wo process.env m le aayega
const mongoose = require("mongoose")


function connectToDB(){
    mongoose.connect(process.env.MONGO_URI)
     // MongoDB Atlas ke database se connection banane ki request bheji.
    // Connection string mein database cluster ki details hoti hain.
    // hum apne server ko databse se connect krwate h (/<database name>) ke through hum isko database se connect krte h
    // (/<database name>) nhi hota h to  ye khud create krta h cluster k andar aur connect krta h
    .then(()=>{
           // Jab database se connection successfully ban jayega,
        // tab ye code chalega.
        console.log("database connected")
    })
}


module.exports=connectToDB