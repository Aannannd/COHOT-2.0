/* 
SERVER KO START  KRNA 
DATABASE SE CONECT KRNA 
*/
 require("node:dns/promises").setServers(["1.1.1.1","8.8.8.8"]); // ye line isliye h ki humara server local machine p chl rha h aur vo dns ko resolve nhi kr pa rha h , to humne manually dns ko set krdia                                                                    

const app = require("./src/app")
const connectToDB = require("./src/config/database")

connectToDB()


app.listen(3000,()=>{
    console.log("server running at port 3000")
})
