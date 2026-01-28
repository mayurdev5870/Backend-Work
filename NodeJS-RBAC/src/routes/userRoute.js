const express = require('express');
const VerifyToken = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');

const router = express.Router();

// Only admin can access this router
router.get('/admin', VerifyToken(), authorizeRoles('admin'), (req, res) => {
    res.send('welcome admin');
});

// Only manager can access this router
router.get('/manager', VerifyToken(), authorizeRoles('admin', 'manager'), (req, res) => {
    res.send('welcome manager');
});

// All can access this router
router.get('/user', VerifyToken(), authorizeRoles('admin', 'manager', 'user'), (req, res) => {
    res.send('welcome user');
});

module.exports = router;
