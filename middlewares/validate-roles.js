const { response, request } = require('express');
const user = require('../models/user');

const hasRole = (...roles) =>{
    return (req = request, res = response, next) => {
        if (!user.role || !roles.includes(user.role)) {
            return res.status(403).json({ message: "User don't have the required role" });
        }
        next();
    } 
};

module.exports = {hasRole};
