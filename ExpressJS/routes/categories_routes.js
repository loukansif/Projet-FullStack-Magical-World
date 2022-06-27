const express = require('express');
const router = express.Router();
const Categorie = require("../models/categorie");
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

//Create
router.post('/', async (req, res) => {
    const categorie = new Categorie({
		name: req.body.name,
	});
    await categorie.save();
    res.send(categorie);
});

module.exports = router;