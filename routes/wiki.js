const router = require('express').Router();
const { main, addPage, wikiPage } = require('../views')
const { Page } = require('../models');//like a table for the database


router.get('/', async (req, res) => {
    const pages = await Page.findAndCountAll();
    res.send(main(pages));
})

router.get('/add', (req, res) => {
    res.send(addPage());
})

router.get('/:slug', async (req, res, next) => {
    const slug = req.params.slug
    try {
        const queryRes = await Page.findOne({
            where: {
                slug /*where slug is = to req.params.slug */
            }
        });
        res.send(wikiPage(queryRes))
    } catch (error) {next(error)}
})

router.post('/', async (req, res, next) => {
    const { title, email, content, status } = req.body

    const page = new Page({ title, content, status });

    // store page to database then redirect
    try {
        await page.save();
        // redirect to the newly created page
        res.redirect(`/wiki/${page.slug}`);
    } catch (error) { next(error) }

    console.log(page)
})

module.exports = router
