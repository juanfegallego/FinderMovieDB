const router = require("express").Router();

const moviesRouter = require("./routers/moviesRouter");
const seriesRouter = require("./routers/seriesRouter");
const userRouter = require("./routers/userRouter");

router.use("/movies", moviesRouter);
router.use("/series", seriesRouter);
router.use("/user", userRouter);

module.exports = router;



