const express = require('express');

const router = express.Router({ mergeParams: true });

const messageController = require('../controllers/messages.controller');

/* all message
 */

/**
 * @swagger
 * /Products:
 *    get: All message
 *    tags:
 *    - message
 *    summary: Get all Message
 *    description:
 *      Will return all Message
 *    produces: application/json
 *    parameters:
 *     - in: page
 *       name: query
 *       schema:
 *         type: Query Parameters
 *         description: message
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/', async (req, res) => {
  try {
    const result = await messageController.getAllmessage(req.query);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in get all message api/message/ ${error}`,
    });
  }
});

/* products by id
 */

/**
 * @swagger
 * /message/{ID}:
 *  get:
 *    tags:
 *    - message-ID
 *    summary: Get message by ID
 *    description:
 *      Will return single message with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: id
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The ID of the message to get
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.get('/:id', async (req, res) => {
  try {
    const result = await messageController.getMessageById(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in get all message api/message/:id ${error}`,
    });
  }
});

/* post message
 */

/**
 * @swagger
 * /post/
 *  get:
 *    tags:
 *    - message-post
 *    summary: post message
 *    description:
 *      Will post a message .
 *    produces: application/json
 *    parameters:
 *     - in: id
 *       name: post message
 *       schema:
 *         type: integer
 *         required: true
 *         description: The post message
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.post('/', async (req, res) => {
  try {
    const result = await messageController.postMessage(req.body);
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in get all message api/message/ ${error}`,
    });
  }
});

/* put/update message by id
 */

/**
 * @swagger
 * /message/{ID}:
 *  get:
 *    tags:
 *    - post message-ID
 *    summary: update message by ID
 *    description:
 *      Will edit message  with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: id
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: The message to edit
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.put('/:id', async (req, res) => {
  try {
    const result = await messageController.updateMessageByid(
      req.body,
      req.params.id,
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in get all message api/message/ ${error}`,
    });
  }
});

/* delete message by id
 */

/**
 * @swagger
 * /delete/{ID}:
 *  get:
 *    tags:
 *    - deletemessage-ID
 *    summary: Get products by ID
 *    description:
 *      Will delete single message with a matching ID.
 *    produces: application/json
 *    parameters:
 *     - in: id
 *       name: id
 *       schema:
 *         type: integer
 *         required: true
 *         description: to delete the messate that matches the  given message
 *
 *    responses:
 *      200:
 *        description: Successful request
 *      5XX:
 *        description: Unexpected error.
 */

router.delete('/:id', async (req, res) => {
  try {
    const result = await messageController.deleteMessageById(
      req.body,
      req.params.id,
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: `internal server error in delete reviews by id api/reviews/ ${error}`,
    });
  }
});

module.exports = router;
