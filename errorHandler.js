import httpStatus from 'http-status';

export class CustomError extends Error {
  constructor(message, statusCode, shouldShowShortError = false) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.shouldShowShortError = shouldShowShortError;
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
  // TODO: use promise.resolve to handle both async and serial controllers
  return (req, res, next) => {
    try {
      controller(req, res, next);
    } catch (error) {
      const customError = new CustomError(
        error.message,
        error.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        error.shouldShowShortError
      );
      next(customError);
    }
  };
}

export function globalErrorHandler(error, req, res, next) {
  if (error.shouldShowShortError) {
    res.status(error.statusCode).json({
      message: error.message,
      statusCode: error.statusCode,
    });
  } else {
    console.log(error); // TODO: use logger instead of console statement
    // TODO: if 'production' dont display stacktrace
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      message: httpStatus['500_NAME'],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
      stackTrace: error.stack,
    });
  }
}
