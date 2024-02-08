const { response, request } = require('express');

const hasRole = (...roles) =>{
    return (req = request, res = response, next) => {
        const user = req.user;
        if (!roles.includes(user.role)) {
            return res.status(403).json({ message: "User don't have the required role" });
        }
        next();
    } 
};

module.exports = {hasRole};
