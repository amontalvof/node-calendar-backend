const { response } = require('express');
const Event = require('../models/Event');

const createEvent = async (req, res = response) => {
    const event = new Event(req.body);
    try {
        event.user = req.uid;
        const savedEvent = await event.save();
        res.json({
            ok: true,
            event: savedEvent,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error, please talk to the administrator.',
        });
    }
};

const readEvent = async (req, res = response) => {
    res.json({
        ok: true,
        message: 'get event',
    });
};

const updateEvent = async (req, res = response) => {
    res.json({
        ok: true,
        message: 'update event',
    });
};

const deleteEvent = async (req, res = response) => {
    res.json({
        ok: true,
        message: 'delete event',
    });
};

module.exports = { createEvent, readEvent, updateEvent, deleteEvent };
