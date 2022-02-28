import { Request, Response } from 'express';
import CheckDivisorPrimoNumberFacades from '../Facades/CheckDivisorPrimoNumberFacades';

export class CalculerNumberController {

    
    calculate = (req: Request, res: Response) => {
        let {number}  = req.query;
        let facadesNumbers: CheckDivisorPrimoNumberFacades =  new CheckDivisorPrimoNumberFacades()
        let  result = facadesNumbers.process(number);
        return res.status(200).json(result);
    }
}
