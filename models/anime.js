const mongoose = require("./connection")
const {Schema, model} = mongoose
const animesSchema = new Schema({
    title: String,
    yearReleased: Number,
    watchedEpisodes: Number,
    totalEpisodes: Number,
    completed: Boolean
})
const Anime = model("Anime", animesSchema)

module.exports = Anime