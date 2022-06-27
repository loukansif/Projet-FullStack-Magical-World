const express = require('express');
const app = express();
 const categories_routes = require('./routes/categories_routes');
// const toys_routes = require('./routes/toys_routes');
// const elves_routes = require('./routes/elves_routes');

const dotenv = require('dotenv');
dotenv.config({path : "./config.env"});
const PORT = process.env.PORT;

var mongoose = require('mongoose');
const URI = process.env.ATLAS_URI;
const db = mongoose.connection;

mongoose
    .connect(URI, { useNewUrlParser: true })
    .then(() => {
        console.log("connection à la base réussie");
        app.use('/categories', categories_routes);
        // app.use('/toys', toys_routes);
        // app.use('/elves', elves_routes);
        app.listen(PORT, () => {
            console.log('Server app listening on port ' + PORT);
        });
    })

