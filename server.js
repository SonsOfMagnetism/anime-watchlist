require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const app = express()
const PORT = process.env.PORT || 3000
const AnimeRouter = require("./controllers/animeController")
const UserRouter = require("./controllers/user")
const session = require("express-session")
const MongoStore = require("connect-mongo")

app.use(morgan("dev"))
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO }),
    saveUninitialized: true,
    resave: false
}))
app.use("/anime", AnimeRouter)
app.use("/user", UserRouter)

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.listen(PORT, () => {
    console.log(`You are now on Port: ${PORT}`)
})