
const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/path', (req, res, next) => {
    User.find({}, 'player')
        .then(data => res.json(data))
        .catch(next)
});

router.post('/path', (req, res, next) => {

});

router.delete('/path/:id', (req, res, next) => {

});

module.exports = router;
