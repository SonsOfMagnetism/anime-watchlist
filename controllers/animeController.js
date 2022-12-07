const express = require("express")
const Anime = require("../models/anime")

const router = express.Router()

// Index
router.get("/", async(req, res) => {
    const animes = await Anime.find({})
    res.render("anime/index.ejs", { animes })
})

// New

// Delete

// Update

// Create

// Edit

// Show
router.get("/:id", (req, res) => {
    const id = req.params.id
    Anime.findById(id, (err, anime) => {
        res.render("anime/show.ejs", {anime})
    })
})

module.exports = router