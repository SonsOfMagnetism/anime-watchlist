const express = require("express")
const User = require("../models/user")
const bcrypt = require("bcryptjs")

const router = express.Router()

router.get("/signup", (req, res) => {
    res.render("user/signup.ejs")
})

router.post("/signup", async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10))
    User.create(req.body, (err, user) => {
        res.redirect("/user/login")
    })
})

router.get("/login", (req, res) => {
    res.render("user/login.ejs")
})

router.post("/login", (req, res) => {
    const { username, password } = req.body
    User.findOne({ username }, (err, user) => {
        if (!user) {
            res.send("user does't exist")
        } else {
            const result = bcrypt.compareSync(password, user.password)
            if (result) {
                req.session.username = username
                req.session.loggedIn = true
                res.redirect("/anime")
            } else {
                res.send("wrong password")
            }
        }
    })
})

router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        res.redirect("/")
    })
})

module.exports = router