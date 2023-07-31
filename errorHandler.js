import httpStatus from 'http-status';
import logger from './logger.js';
import config from './config/index.js';

export class CustomError extends Error {
    constructor(message, statusCode, isVerboseDisabled = false) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.isVerboseDisabled = isVerboseDisabled;
        Error.captureStackTrace(this, this.constructor); // TODO: use more accurate stack trace
    }
}

export function pageNotFoundHandler(_req, _res, next) {
    const error = new CustomError(
        httpStatus['404_NAME'].replaceAll('_', ' '), // TODO: use i18n
        httpStatus.NOT_FOUND,
        true,
    );
    next(error);
}

export function catchRuntimeError(controller) {
    // TODO: use promise.resolve to handle both async and serial controllers
    return (req, res, next) => {
        try {
            controller(req, res, next);
        } catch (error) {
            // TODO: needs more smoke testing
            const customError = new CustomError(
                error.message || httpStatus['500_NAME'].replaceAll('_', ' '), // use i18n
                error.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
                error.isVerboseDisabled || false,
            );
            next(customError);
        }
    };
}

// eslint-disable-next-line no-unused-vars
export function globalErrorHandler(error, req, res, next) {
    if (error.isVerboseDisabled) {
        res.status(error.statusCode).render('error', {
            message: error.message,
            statusCode: error.statusCode,
        });
        logger.error({
            env: config.NODE_ENV,
            message: error.message,
            statusCode: error.statusCode,
            stack: error.stack,
        });
    } else {
        logger.error({
            env: config.NODE_ENV,
            message: error.message,
            statusCode: error.statusCode,
            stack: error.stack,
        });
        // send generic message to client
        res.status(httpStatus.INTERNAL_SERVER_ERROR).render('error', {
            message: httpStatus['500_NAME'].replaceAll('_', ' '),
            statusCode: httpStatus.INTERNAL_SERVER_ERROR,
        });
    }
}
