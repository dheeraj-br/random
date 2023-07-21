import httpStatus from 'http-status';
import { CustomError, catchRuntimeError } from '../../../errorHandler.js';

export const list = (req, res) => {
  res.send({ title: 'Users', users: 'list of users' });
};

export const getById = catchRuntimeError((req, res) => {
  // undefinedVarForTesting500StatusCode;
  if (!parseInt(req.params.id)) {
    throw new CustomError(
      `Bad Request: invalid Id parameter '${req.params.id}'`, // TODO: use i18n
      httpStatus.BAD_REQUEST,
      true
    );
  }
  res.send({ title: 'Users', userId: parseInt(req.params.id) });
});
