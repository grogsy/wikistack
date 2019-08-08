const router = require('express').Router();
const { main } = require('../views')
router.get('/', (req, res) => {
    res.send(main());
})
module.exports = router
