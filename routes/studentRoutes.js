const express = require("express")
const { students, poststudents } = require("../controllers/studentsControllers")

const studentRoutes = express.Router()

studentRoutes.get("/students",students)

studentRoutes.post("/students",poststudents)

module.exports = studentRoutes