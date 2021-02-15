/*
 * User Routes / Auth
 * host + /api/auth
 */

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { validateFields } = require('../middlewares/validate-fields');
const { validateJsonWebToken } = require('../middlewares/validate-jwt');
const { createUser, loginUser, renewToken } = require('../controllers/auth');

router.post(
    '/new',
    [
        //middlewares
        check('name', 'The name is required').not().isEmpty(),
        check('email', 'The email is invalid').isEmail(),
        check(
            'password',
            'The password must be at least 6 characters long'
        ).isLength({ min: 6 }),
        validateFields,
    ],
    createUser
);

router.post(
    '/',
    [
        check('email', 'The email is invalid').isEmail(),
        check(
            'password',
            'The password must be at least 6 characters long'
        ).isLength({ min: 6 }),
        validateFields,
    ],
    loginUser
);

router.get('/renew', validateJsonWebToken, renewToken);

module.exports = router;
