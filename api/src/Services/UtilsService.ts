export default class UtilServices {
    
    constructor() {}

    checkNumberDivisor = (number : any,  divisor : any) : boolean => {
        return number%divisor == 0
    }

    checkNumberPrime =  (number : any) : boolean => {
        let count = 0;
        for (let i = number; i > 0; i--) {
            if (number%2 == 0) {
                count++;
            }

            if (count > 2) {
                return false;
            }
        }

        return true;
    }
}