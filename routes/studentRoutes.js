const express = require("express")

const studentRoutes = express.Router()

studentRoutes.get("/students",(req,res)=>{
    res.json([
        {
            name:"Raj",
            branch:"DS"
        },
        {
            name:"Aniket",
            branch:"DS"
        },
        {
            name:"Charan",
            branch:"DS"
        }
    ])
})

studentRoutes.post("/students",(req,res)=>{
    res.json({
        message:"New Student Added"
    })
})

module.exports = studentRoutes