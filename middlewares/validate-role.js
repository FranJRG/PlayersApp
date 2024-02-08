const { request, response } = require('express')
const User = require('../models/user');

const isAdmin = (req = request, res = response, next) => {
    const user = req.user;

    if(user.role !==  'ADMIN_ROLE'){
        return res.status(403).json({message: 'User is not admin'});
    }

    next();
}

module.exports = {isAdmin}