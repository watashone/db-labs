export default class ApiError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.status = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
