import httpStatus from 'http-status';
import { CustomError, catchRuntimeError } from '../../../errorHandler.js';

export const list = (req, res) => {
    res.send({ title: 'Users', users: 'list of users' });
};

export const getById = catchRuntimeError((req, res) => {
    // undefinedVarForTesting500StatusCode;
    if (!parseInt(req.params.id, 10)) {
        throw new CustomError(
            httpStatus['400_NAME'].replaceAll('_', ' '), // TODO: use i18n
            httpStatus.BAD_REQUEST,
            true,
        );
    }
    res.send({ title: 'Users', userId: parseInt(req.params.id, 10) });
});
