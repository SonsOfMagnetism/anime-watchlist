require("dotenv").config()
const mongoose = require("./connection")
const Anime = require("./anime")

mongoose.connection.on("open", () => {
    const startAnimes = [
        { title: "Dragon Ball", yearReleased: 1986, watchedEpisodes: 153, totalEpisodes: 153, completed: true },
        { title: "My Hero Academia", yearReleased: 2016, watchedEpisodes: 109, totalEpisodes: 119, completed: false },
        { title: "Mobile Suit Gundam", yearReleased: 1979, watchedEpisodes: 43, totalEpisodes:43, completed: true },
        { title: "Samurai Champloo", yearReleased: 2004, watchedEpisodes: 24, totalEpisodes: 24, completed: true },
        { title: "One Punch Man", yearReleased: 2015, watchedEpisodes: 24, totalEpisodes: 24, completed: true }
    ]
    Anime.deleteMany({}, (err, data) => {
        Anime.create(startAnimes, (err, data) => {
            console.log(data)
            mongoose.connection.close()
        })
    })
})