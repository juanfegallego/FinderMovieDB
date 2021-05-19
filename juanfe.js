("hola es mi archivo ");

("sigo trabajando en esta rama");

const router = require('express').Router();

const moviesRouter = require('./routes/movieRouter');


router.use('/movie', moviesRouter)

module.exports = router;