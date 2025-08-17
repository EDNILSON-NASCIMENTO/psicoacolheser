import { Response } from "express";
import { UserAlreadyExistsError } from "../domain/use-cases/Errors/user-already-exists.error";
import { Left } from "../core/either";
import { WrongCredentialsError } from "../domain/use-cases/Errors/wrong-credentials.error";
import { CnpjOrCpfAlreadyExists } from "../domain/use-cases/Errors/cnpj-or-cpf-already-exists.error";

export class ErroHandler {
  static handle(error: any, res: Response) {
    // Caso seja um Left, pegar o valor interno
    const errValue = error instanceof Left ? error.value : error;

    if (errValue instanceof UserAlreadyExistsError) {
      return res.status(400).send({ message: errValue.message, status: 400});
    }

    if (errValue instanceof WrongCredentialsError) {
      return res.status(401).send({ message: errValue.message, status: 401});
    }

    if (errValue instanceof CnpjOrCpfAlreadyExists) {
      return res.status(403).send({ message: errValue.message, status: 403});
    }


    console.error(errValue, "erro não tratado");
    return res.status(500).send({ message: "Algo deu errado!", status: 500});
  }
}
