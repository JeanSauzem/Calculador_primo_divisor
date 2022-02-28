import  UtilsService  from "../Services/UtilsService";

export default class CheckDivisorPrimoNumberFacades
{
    numbersDivisor:any = []
    numbersPrimo:any = []

    process(number: any) {
        let utils = new UtilsService();
        for(let i = number-1; i >= 1; i--) {
            if (utils.checkNumberDivisor(number, i)) {
                this.numbersDivisor.push(i);
            }
            if (utils.checkNumberPrime(i)) {
                this.numbersPrimo.push(i);
            }
        }
       
        return {
            "divisor":this.numbersDivisor,
            "primo": this.numbersPrimo
        }
    }
}