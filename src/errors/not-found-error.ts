import { CustomError } from "./custom-errors";

export class NotFoundError extends CustomError {
    statusCode= 404;

    constructor (mesage= 'Not found') {
        super (mesage);
        this.message = mesage;

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
      serializeErrror(){
       return {message: this.message};
    }
}