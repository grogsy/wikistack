const router = require('express').Router();
const { main, addPage } = require('../views')
const { Page } = require('../models');//like a table for the database


router.get('/', (req, res) => {
    res.send(main());
})

router.get('/add', (req, res) => {
    res.send(addPage());
})

router.post('/', async (req, res, next) => {
    const { title, email, content, pagestatus } = req.body

    // if (title) {
    //     slug = title.replace(' ', '_')
    // } else {
    //     slug = 'no_title'
    // }

    const page = new Page({ title, content });

    // store page to database then redirect
    try {
        await page.save();
        res.redirect('/');
    } catch (error) { next(error) }

    console.log("WORKING")
})

module.exports = router
