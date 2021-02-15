/*
 * Events Routes
 * host + /api/events
 */

const { Router } = require('express');
const { validateJsonWebToken } = require('../middlewares/validate-jwt');
const {
    createEvent,
    readEvent,
    updateEvent,
    deleteEvent,
} = require('../controllers/events');

const router = Router();

// all requests have to go through the validation of the json web token
router.use(validateJsonWebToken);

// create event
router.post('/', createEvent);

// read event
router.get('/', readEvent);

// update event
router.put('/:id', updateEvent);

// delete event
router.delete('/:id', deleteEvent);

module.exports = router;
