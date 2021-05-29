const router = require("express").Router();
const usersControllers = require("../controllers/usersControllers");
const authenticate = require("../middleware/authenticate");
const admin = require("../middleware/admin");

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

router.get("/:id", admin, async(req, res) => {
    try {
        const id = req.params.id;
        res.json(await usersControllers.userId(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.put("/", authenticate, async(req, res) => {
    try {
        const body = req.body;
        res.json( await usersControllers.modifyUser(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get("/", admin, async(req, res) => {
    try {
        res.json(await usersControllers.findAllUsers());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.post("/bycp", admin, async(req, res) => {
    try {
        const body = req.body;
        res.json( await usersControllers.users_by_cp(body));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.delete('/:id', authenticate, async (req, res) => {
    try {
        const id = req.params.id;
        res.json(await usersControllers.deleteUser(id));
    }catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

module.exports = router;