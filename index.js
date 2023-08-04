const express= require("express")
const { genquote } = require("./routes/quoteroute")
const cors=require("cors")
const app=express()
const port=5858

app.use(cors())
app.use(express.json())

app.use("/quote",genquote)




app.listen(port,()=>{
    console.log("server is running")
})