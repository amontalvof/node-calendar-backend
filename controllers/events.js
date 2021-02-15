const { response } = require('express');

const createEvent = async (req, res = response) => {
    res.json({
        ok: true,
        message: 'create event',
    });
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
