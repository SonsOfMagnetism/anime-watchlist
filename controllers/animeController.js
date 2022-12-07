const express = require("express")
const Anime = require("../models/anime")

const router = express.Router()

// Index
router.get("/", async(req, res) => {
    const animes = await Anime.find({})
    res.render("anime/index.ejs", { animes })
})

// New
router.get("/new", (req, res) => {
    res.render("anime/new.ejs")
})

// Delete

// Update
router.put(":id", (req, res) => {
    const id = req.params.id
    req.body.completed = req.body.completed === "on" ? true : false
    Anime.findByIdAndUpdate(id, req.body, {new: true}, (err, anime) => {
        res.redirect("/anime")
    })
})

// Create
router.post("/", (req, res) => {
    req.body.completed = req.body.completed === "on" ? true : false
    Anime.create(req.body, (err, anime) => {
        res.redirect("/anime")
    })
})

// Edit

// Show
router.get("/:id", (req, res) => {
    const id = req.params.id
    Anime.findById(id, (err, anime) => {
        res.render("anime/show.ejs", {anime})
    })
})

module.exports = router