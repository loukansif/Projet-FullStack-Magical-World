const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const Toy = require('../models/toys');

router.get('/', async(req, res) => {
    try {
        const Toys = await Toy.find();
        res.send(Toys);
    } catch (error) {
        res.status(404);
    }
});

router.post('/', async(req, res) => {
    const toy = new Toy({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category
    });
    try {
        await toy.save();
        res.send(JSON.stringify(toy, null, 2));
    } catch (error) {
        res.status(404);
    }    
});

router.delete('/:id', async(req, res) => {
    let toys_id = req.params.id;
    try {
        await Toy.deleteOne({_id: toys_id});
        var toys = await Toy.find();
        res.send(JSON.stringify(toys, null, 2)); 
    } catch (error) {
        res.status(404);
		res.send({ error: "Categorie doesn't exist!" });
    }
});

module.exports = router;