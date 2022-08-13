const express = require('express');
const router = express.Router();
const postRouter = require('./post/post');

// normal get routes
router.get('/', (req, res) => {
    res.render('index', {title: 'Play with node and mongo', message: 'Hey Lets Play with node and mongo'})
})

//use post routes
router.use(postRouter);

//dynamic routes
router.route("/authored")
    .get((req, res) => {res.send('authored Welcome to nodejs.')})
    .post((req, res) => {res.json({data: "authored dynamic routes post"})})



//invalid routes
router.use("/*", (req, res) => {
    res.send('404 Error Page Not Found');
})

module.exports = router
