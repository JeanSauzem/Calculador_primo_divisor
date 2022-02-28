import express, { Router, Request, Response, NextFunction } from "express";
import { isNumber } from "util";

const Middleware: Router = express.Router();


Middleware.use((req: Request, res: Response, next: NextFunction) => {
    let  { number } =  req.query

    if (number == undefined ) {
        return res.status(422).json({"message": "Obrigado Informar o número"})
    }

    next()
})

export default Middleware