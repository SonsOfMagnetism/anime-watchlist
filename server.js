require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const app = express()
const PORT = process.env.PORT || 3000
const AnimeRouter = require("./controllers/animeController")
const UserRouter = require("./controllers/user")

app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use("/anime", AnimeRouter)
app.use("/user", UserRouter)

app.listen(PORT, () => {
    console.log(`You are now on Port: ${PORT}`)
})