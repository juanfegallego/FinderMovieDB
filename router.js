const router = require("express").Router();

const moviesRouter = require("./routers/moviesRouter");


router.use("/movies", moviesRouter);

module.exports = router;

