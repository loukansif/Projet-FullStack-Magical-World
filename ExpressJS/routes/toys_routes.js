const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Toy = require('../models/toys');

router.get('/', async(req, res) => {
    try {
        const Toys = await Toy.find();
        res.json(Toys);
    } catch (error) {
        res.status(404);
    }
});


module.exports = router;