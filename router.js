const router = require("express").Router();

const moviesRouter = require("./routers/moviesRouter");
const seriesRouter = require("./routers/seriesRouter");
const userRouter = require("./routers/userRouter");
const loginRouter = require("./routers/login.router");

router.use("/movies", moviesRouter);
router.use("/series", seriesRouter);
router.use("/users", userRouter);
router.use("/login", loginRouter);

module.exports = router;



