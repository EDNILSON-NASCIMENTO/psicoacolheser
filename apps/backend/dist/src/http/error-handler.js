"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErroHandler = void 0;
const user_already_exists_error_1 = require("../domain/use-cases/Errors/user-already-exists.error");
const either_1 = require("../core/either");
const wrong_credentials_error_1 = require("../domain/use-cases/Errors/wrong-credentials.error");
class ErroHandler {
    static handle(error, res) {
        // Caso seja um Left, pegar o valor interno
        const errValue = error instanceof either_1.Left ? error.value : error;
        if (errValue instanceof user_already_exists_error_1.UserAlreadyExistsError) {
            return res.status(400).send({ message: errValue.message, status: 400 });
        }
        if (errValue instanceof wrong_credentials_error_1.WrongCredentialsError) {
            return res.status(401).send({ message: errValue.message, status: 401 });
        }
        console.error(errValue, "erro não tratado");
        return res.status(500).send({ message: "Algo deu errado!", status: 500 });
    }
}
exports.ErroHandler = ErroHandler;
