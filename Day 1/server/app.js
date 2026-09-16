// server ek machine hoti h jisse program kiya jata h , user jo bhi request bheje usaka ek prpper responce la k de 
const express = require("express")

const app = express() // server  k insatnce ko create krte h

app.get("/", (req,res)=> {
    res.send(" this is express js ")
})

app.get("/about", (req,res)=> {
    res.send(" this is about ")
})

app.get("/home", (req , res) => {
    res.send (" this is home page ")
})
app.listen (3000) // server ko start krte h 

//  npx nodemon <filename> // is used for running the server live while updating  