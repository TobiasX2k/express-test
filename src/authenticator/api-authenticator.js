'use strict';
require('dotenv').config();

const API_HEADER = 'API_KEY';

const apiAutenticate = (req, res, next) => {
    if(!req.get(API_HEADER) || req.get(API_HEADER) !== process.env.API_KEY){
        return res.status(500).send('API KEY missing');
    }else{
        return next();
    }
};

module.exports = apiAutenticate;