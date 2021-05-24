const router = require("express").Router();
const usersControllers = require("../controllers/usersControllers");

router.post('/',async (req, res) => {
    try {
        const user = req.body;
        res.json(await usersControllers.createUser(user));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;