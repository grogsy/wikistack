const router = require('express').Router();
const { userPages } = require('../views')
router.get('/', (req, res) => {
    res.send(userPages());
})
module.exports = router