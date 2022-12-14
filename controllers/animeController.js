const express = require("express")
const Anime = require("../models/anime")

const router = express.Router()

router.use((req, res, next) => {
    if(req.session.loggedIn) {
        next()
    } else {
        res.redirect("/user/login")
    }
})

// Index
router.get("/", (req, res) => {
    Anime.find({username: req.session.username}, (err, animes) => {
        res.render("anime/index.ejs", { animes })
    })
})

// New
router.get("/new", (req, res) => {
    res.render("anime/new.ejs")
})

// Delete
router.delete("/:id", (req, res) => {
    const id = req.params.id
    Anime.findByIdAndRemove(id, (err, anime) => {
        res.redirect("/anime")
    })
})

// Update
router.put("/:id", (req, res) => {
    const id = req.params.id
    req.body.completed = req.body.completed === "on" ? true : false
    Anime.findByIdAndUpdate(id, req.body, {new: true}, (err, anime) => {
        res.redirect("/anime")
    })
})

// Create
router.post("/", (req, res) => {
    req.body.completed = req.body.completed === "on" ? true : false
    req.body.username = req.session.username
    Anime.create(req.body, (err, anime) => {
        res.redirect("/anime")
    })
})

// Edit
router.get("/:id/edit", (req, res) => {
    const id = req.params.id
    Anime.findById(id, (err, anime) => {
        res.render("anime/edit.ejs", {anime})
    })
})

// Show
router.get("/:id", (req, res) => {
    const id = req.params.id
    Anime.findById(id, (err, anime) => {
        res.render("anime/show.ejs", {anime})
    })
})

module.exports = router