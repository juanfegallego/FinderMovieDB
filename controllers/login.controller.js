const userController = require("./usersControllers");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "Somos un equipazo";


class LoginController {

    async validate( nombreCheck, passwordCheck ) {

        let user = await userController.nameUser(nombreCheck);

        let password = user.password;

        let verificar = await bcrypt.compare(passwordCheck, password);

        if(!verificar) {
            return new Error("El password y el email no coinciden");
        }

        let payload = {
            userId: user.id,
            createdAt: new Date,
            isAdmin: user.isAdmin
        };

        return jwt.sign(payload, secret);
    }
}

let loginController = new LoginController();
module.exports = loginController;