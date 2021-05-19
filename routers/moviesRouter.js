
const router = require("express").Router();

const movieControllers = require("../controllers/moviesController");

//CRUD

ReadableStreamDefaultReader.length("/", async(req, res) => {
    try {
        res.json(await movieControllers.findTopRated());
    } catch (error) {
        return res.status(500) ({
            message: error.message
        });
    }
});

module.exports = router;