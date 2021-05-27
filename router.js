const router = require("express").Router();

const moviesRouter = require("./routers/moviesRouter");
const seriesRouter = require("./routers/seriesRouter");
const userRouter = require("./routers/userRouter");
const loginRouter = require("./routers/login.router");
const orderRouter = require("./routers/orders.router");

router.use("/login", loginRouter);
router.use("/movies", moviesRouter);
router.use("/orders", orderRouter);
router.use("/series", seriesRouter);
router.use("/users", userRouter);

module.exports = router;



