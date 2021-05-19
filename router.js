const router = require("express").Router();

const moviesRouter = require("./routers/moviesRouter");


router.use("/movie", moviesRouter);

module.exports = router;

