
const router = require("express").Router();

const moviesControllers = require("../controllers/moviesControllers");

//CRUD

router.get("/", async(req, res) => {
    try {
        res.json(await moviesControllers.findTopRated());
    } catch (err) {
        return res.status(500) ({
            message: err.message
        });
    }
});

module.exports = router;