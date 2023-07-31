/**
 * @swagger
 * /list:
 *   get:
 *    description:  Endpoint for all variations of scatter plots
 */
export const list = (req, res) => {
    res.send({ title: 'doc', posts: 'list' });
};

/**
 * @openapi
 * '/api/sessions':
 *  get:
 *    tags:
 *    - Session
 *    summary: Get all sessions
 *    responses:
 *      200:
 *        description: Get all sessions for current user
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/GetSessionResponse'
 *      403:
 *        description: Forbidden
 *  post:
 *    tags:
 *    - Session
 *    summary: Create a session
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/CreateSessionInput'
 *    responses:
 *      200:
 *        description: Session created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/CreateSessionResponse'
 *      401:
 *        description: Unauthorized
 *  delete:
 *    tags:
 *    - Session
 *    summary: Delete a session
 *    responses:
 *      200:
 *        description: Session deleted
 *      403:
 *        description: Forbidden
 */
export const getById = (req, res) => {
    res.send({ title: 'doc', dataId: req.params.id });
};
