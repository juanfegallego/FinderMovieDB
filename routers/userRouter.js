const router = require("express").Router();
const usersControllers = require("../controllers/usersControllers");

router.post('/',async (req, res) => {
    try {
        const id = await usersControllers.createUser(req.body);
        const status = "success";
        res.json({ status, id });
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get("/", async(req, res) => {
    try {
        res.json(await usersControllers.findAllUsers());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;