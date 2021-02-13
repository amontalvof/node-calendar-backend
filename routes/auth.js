/*
 * User Routes / Auth
 * host + /api/auth
 */

const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
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
    ],
    loginUser
);

router.get('/renew', renewToken);

module.exports = router;
