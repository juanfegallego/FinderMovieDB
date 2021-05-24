const { User } = require("../models");

class Users {

    async createUser(user) {

        return User.create(user);
    }

    async findAllUsers() {
        return User.findAll();
    }

}


let usersController = new Users();
module.exports = usersController;