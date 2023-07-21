import httpStatus from 'http-status';

export class CustomError extends Error {
  constructor(message, statusCode, shouldShowShortError = false) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
    this.shouldShowShortError = shouldShowShortError;
    Error.captureStackTrace(this, this.constructor); // TODO: use more accurate stack trace
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
      // TODO: needs more smoke testing
      const customError = new CustomError(
        error.message || 'something went wrong.', // use i18n
        error.statusCode || httpStatus.INTERNAL_SERVER_ERROR,
        error.shouldShowShortError || false
      );
      next(customError);
    }
  };
}

export function globalErrorHandler(error, req, res, next) {
  if (error.shouldShowShortError) {
    res.status(error.statusCode).render('error', {
      message: error.message,
      statusCode: error.statusCode,
    });
  } else {
    // TODO: use logger instead of console statement
    console.log({
      env: process.env.NODE_ENV,
      message: error.message,
      statusCode: error.statusCode,
      stack: error.stack,
    });
    // send generic message to client
    res.status(httpStatus.INTERNAL_SERVER_ERROR).render('error', {
      message: httpStatus['500_NAME'],
      statusCode: httpStatus.INTERNAL_SERVER_ERROR,
    });
  }
}
