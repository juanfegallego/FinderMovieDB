const router = require("express").Router();

const moviesRouter = require("./routers/moviesRouter");
const seriesRouter = require("./routes/seriesRouter");


router.use("/movies", moviesRouter);
router.use("/series", seriesRouter);

module.exports = router;

