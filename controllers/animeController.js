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

module.exports = router