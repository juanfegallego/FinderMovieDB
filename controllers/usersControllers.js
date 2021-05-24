const { User } = require("../models");

class Users {

    async createUser(user) {

        return user;
    }
}



let usersController = new Users();
module.exports = usersController;