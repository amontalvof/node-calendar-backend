const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jsonWebToken');

const createUser = async (req, res = response) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({
                ok: false,
                message: 'Error, there is already a user with that email.',
            });
        }

        user = new User(req.body);

        // encrypt password
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(password, salt);

        await user.save();

        // generate JSON Web Token
        const token = await generateJWT(user.id, user.name);

        res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error, please talk to the administrator.',
        });
    }
};

const loginUser = async (req, res = response) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                ok: false,
                message: 'Error, there is no user with that email.',
            });
        }

        //confirm passwords
        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                message: 'Error, invalid password.',
            });
        }

        // generate JSON Web Token
        const token = await generateJWT(user.id, user.name);

        res.json({
            ok: true,
            uid: user.id,
            name: user.name,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error, please talk to the administrator.',
        });
    }
};

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        message: 'renew',
    });
};

module.exports = { createUser, loginUser, renewToken };
