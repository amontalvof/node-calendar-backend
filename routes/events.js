/*
 * Events Routes
 * host + /api/events
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validateJsonWebToken } = require('../middlewares/validate-jwt');
const { validateFields } = require('../middlewares/validate-fields');
const { isDate } = require('../helpers/isDate');
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
router.post(
    '/',
    [
        check('title', 'Error, the title is required.').not().isEmpty(),
        check('start', 'Error, the start date require a valid date.').custom(
            isDate
        ),
        check('end', 'Error, the end date require a valid date.').custom(
            isDate
        ),
        validateFields,
    ],
    createEvent
);

// read event
router.get('/', readEvent);

// update event
router.put(
    '/:id',
    [
        check('title', 'Error, the title is required.').not().isEmpty(),
        check('start', 'Error, the start date require a valid date.').custom(
            isDate
        ),
        check('end', 'Error, the end date require a valid date.').custom(
            isDate
        ),
        validateFields,
    ],
    updateEvent
);

// delete event
router.delete('/:id', deleteEvent);

module.exports = router;
