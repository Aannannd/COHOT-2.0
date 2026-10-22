 require("node:dns/promises").setServers(["1.1.1.1","8.8.8.8"]); 


const app = require("./Src/app")
const connectToDB = require("./Src/config/Database")

connectToDB()


app.listen(3000,()=>{
    console.log("server running at port 3000")

})





