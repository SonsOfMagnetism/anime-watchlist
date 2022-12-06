require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const app = express()
const PORT = process.env.PORT || 3000

mongoose.connect(process.env.MONGO)
mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("Disconnected to Mongo"))
.on("error", () => console.log(error))

app.use(morgan("dev"))
app.use(methodOverride("method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/anime", (req, res) => {
    res.send("<h1>Server is working</h1>")
})

app.listen(PORT, () => {
    console.log(`You are now on Port: ${PORT}`)
})