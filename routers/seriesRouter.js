
const router = require("express").Router();

const seriesControllers = require("../controllers/seriesControllers");

//CRUD

router.get("/", async(req, res) => {
    try {
        res.json(await seriesControllers.findTopRated());
    } catch (err) {
        return res.status(500).json ({
            message: err.message
        });
    }
});

router.get("/search/:tvId", async(req, res) => {
    try {
        let tvId  = req.params.tvId;
        res.json(await seriesControllers.searchScreened(tvId));
    } catch (err) {
        return res.status(500).json ({
            mensaje: err.message
        });
    }
});

router.get("/:id", async(req, res) => {
    try {
        let id = req.params.id;
        res.json(await seriesControllers.searchById(id));
    } catch (err) {
        return res.status(500).json ({
            mensaje: err.message
        });
    }
});

router.get("/searchTitle/:query", async(req, res) => {
    try {
        let query = req.params.query;
        console.log(query)
        res.json(await seriesControllers.searchByTitle(query));
    } catch (err) {
        return res.status(500).json ({
            mensaje: err.message
        });
    }
});

router.get("/on_the_air/", async(req, res) => {
    try {
        res.json(await seriesControllers.onTheAir());
    } catch (err) {
        return res.status(500).json ({
            mensaje: err.message
        });
    }
});




module.exports = router;