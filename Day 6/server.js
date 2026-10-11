/* 
server ko start krna 
database se connect krna 
*/
 require("node:dns/promises").setServers(["1.1.1.1","8.8.8.8"]); // ye line isliye h ki humara server local machine p chl rha h aur vo dns ko resolve nhi kr pa rha h , to humne manually dns ko set krdia                                                                    

const mongoose  = require("mongoose")
const connectToDB = require("./src/config/database.js");
const app = require("./src/app.js") ;


   
                

connectToDB()
app.listen(3000,()=>{
    console.log("server running at port 3000")
})

