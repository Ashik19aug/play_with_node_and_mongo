const express = require('express');
const router = express.Router();
const postRouter = require('./post/post');
const userRouter = require('./Authentication/Authentication');


// normal get routes
router.get('/', (req, res) => {
    res.render('index', {title: 'Play with node and mongo', message: 'Hey Lets Play with node and mongo'})
})

//use posts routes
router.use(postRouter);
//use auth routes
router.use(userRouter);

//invalid routes
router.use("/*", (req, res) => {
    res.send('404 Error Page Not Found');
})

module.exports = router
