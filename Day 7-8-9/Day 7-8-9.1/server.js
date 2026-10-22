 require("node:dns/promises").setServers(["1.1.1.1","8.8.8.8"]);
const app = require ("./src/app.js")
const connectTOoDB = require("./src/config/Database.js")

connectTOoDB()


app.listen(3000, (req,res)=>{
    console.log("server running at port 3000")
})