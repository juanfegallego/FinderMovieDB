
const router = require("express").Router();

const moviesControllers = require("../controllers/moviesControllers");

//CRUD

router.get("/", async(req, res) => {
    try {
        res.json(await moviesControllers.findTopRated());
    } catch (error) {
        return res.status(500) ({
            message: error.message
        });
    }
});

module.exports = router;