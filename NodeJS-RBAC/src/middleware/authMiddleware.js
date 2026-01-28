const jwt = require('jsonwebtoken');

const VerifyToken = () => { 
    return (req, res, next) => {
        const authHeader = req.headers.authorization || req.headers.Authorization;
        if (!authHeader || !authHeader.startsWith('Bearer')) {
            return res.status(401).json({ message: 'Authorization header missing or malformed' });
        }
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            if (!decoded) {
                return res.status(401).json({ message: 'Token verification failed' });
            }
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }   
  }
}

module.exports = VerifyToken;