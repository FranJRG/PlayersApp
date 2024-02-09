const User = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) {
            const isPasswordValid = bcryptjs.compareSync(password, user.password);
            if (isPasswordValid) {
                const payload = {uid:user.id};
                const token = jwt.sign(payload, process.env.SECRET,{ expiresIn: '4h'});
                res.status(200).json({ user,token });
            } else {
                res.status(401).json({ message: "Invalid password" });
            }
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {loginUser}