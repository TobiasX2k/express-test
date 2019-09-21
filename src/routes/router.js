const express = require('express');
const authenticator = require('../authenticator/api-authenticator');
const router = express.Router();

router.get('/api/', authenticator, (req,res) => {
    res.status(200)
    .json({
        result:'success'
    });
});

module.exports = router;