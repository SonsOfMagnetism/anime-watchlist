const mongoose = require("./connection")
const {Schema, model} = mongoose
const animeSchema = new Schema({
    title: String,
    yearReleased: Number,
    watchedEpisodes: Number,
    totalEpisodes: Number,
    completed: Boolean
})
const Anime = model("Anime", animeSchema)

module.exports = Anime