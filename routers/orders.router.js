const router = require("express").Router();
const ordersController = require("../controllers/orders.controller");
const authenticate = require("../middleware/authenticate");

router.post("/", authenticate, async (req, res) => {
    try {
        const body = req.body;
        res.json( await ordersController.createOrder(body));
    } catch (error) {
        return res.status(500).json({
            messsage: error.message
        });
    }
});

router.get("/:id", authenticate, async(req, res) => {
    try {
        const id = req.params.id;
        res.json( await ordersController.show_order_by_id(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.get("/", authenticate, async(req, res) => {
    try {
        res.json( await ordersController.findAllOrders());
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.put("/:id", authenticate,  async(req, res) => {
    try {
        const idOrder = req.params.id;
        const body = req.body;
        res.json( await ordersController.modifyOrder(body, idOrder));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

router.delete("/:id", authenticate, async(req, res) => {
    try {
        const id = req.params.id;
        res.json( await ordersController.removeOrder(id));
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;