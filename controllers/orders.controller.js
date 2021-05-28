const { Order } = require("../models");
const router = require("../routers/orders.router");

class Whis {

    async createOrder(body) {

        return Order.create(body);
    }

    async show_order_by_id(id) {

        return Order.findByPk(id);
    }

    async findAllOrders() {

        return Order.findAll();
    }

    async userOder(userId) {

        return Order.findAll({ where: {userId: userId}})
    }

    async modifyOrder(body, idOrder) {

        return Order.update(
            //DAtos que cambiamos
            // movieId: body.movieId
            {  rentalDate: body.rentalDate, returnDate: body.returnDate },
            //Donde
            { where: {id: idOrder}}

        )
    }

    async removeOrder(id) {

        return Order.destroy( {where: {id: id}});
    }
}


let ordersController = new Whis();
module.exports = ordersController;