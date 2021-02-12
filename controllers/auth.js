const { response } = require('express');

const createUser = (req, res = response) => {
    const { name, email, password } = req.body;
    if (name.length < 5) {
        return res.status(400).json({
            ok: false,
            message: 'the name should have more than 5 characters',
        });
    }
    res.json({
        ok: true,
        message: 'register',
        name,
        email,
        password,
    });
};

const loginUser = (req, res = response) => {
    const { email, password } = req.body;

    res.json({
        ok: true,
        message: 'login',
        email,
        password,
    });
};

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        message: 'renew',
    });
};

module.exports = { createUser, loginUser, renewToken };
