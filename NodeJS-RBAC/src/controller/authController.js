const JWT = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const register = async (req, res) => {
    try {
        const { username, password, role } = req.body;
        const hashPassword = bcrypt.hashSync(password, 10);
        const user = new User({
            username,
            password: hashPassword,
            role
        });
        await user.save();
        res.status(201).json({ message: `User registered successfully ${user.username}` });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = JWT.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error: error.message });
    }
}

module.exports = { register, login };