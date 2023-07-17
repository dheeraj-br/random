import httpStatus from 'http-status';

export class CustomError extends Error {
  constructor(message, statusCode, isOperationalError = false) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.isOperationalError = isOperationalError;
    Error.captureStackTrace(this, this.constructor);
  }
}

export function pageNotFoundHandler(req, res, next) {
  const error = new CustomError(
    `cannot find ${req.originalUrl}`, // TODO: use i18n
    httpStatus.NOT_FOUND,
    true
  );
  next(error);
}

export function catchRuntimeError(controller) {
  return (req, res, next) => {
    try {
      controller(req, res, next);
    } catch (error) {
      const customError = new CustomError(
        error.message,
        error.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        error.isOperationalError
      );
      next(customError);
    }
  };
}

export function globalErrorHandler(error, req, res, next) {
  if (error.isOperationalError) {
    res.status(error.statusCode).json({
      message: error.message,
      statusCode: error.statusCode,
      isOperationalError: error.isOperationalError,
    });
  } else {
    console.log(error); // TODO: use logger instead of console statement
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: httpStatus['500_NAME'],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      isOperationalError: error.isOperationalError,
    });
  }
}
