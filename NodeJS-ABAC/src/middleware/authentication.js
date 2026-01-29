import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/env.js';


const VerifyToken = () => { 
    return (req, res, next) => {
        const authHeader = req.headers.authorization || req.headers.Authorization;
        if (!authHeader || !authHeader.startsWith('Bearer')) {
            return res.status(401).json({ message: 'Authorization header missing or malformed' });
        }
        const token = authHeader.split(' ')[1];
        try {
            const decoded = jwt.verify(token, jwtSecret);
            if (!decoded) {
                return res.status(400).json({status: 400, message: 'Token verification failed' });
            }
            req.user = decoded;
            next();
        }
        catch (error) {
            return res.status(401).json({status: 401, message: 'Invalid or expired token' });
        }   
  }
}

export default VerifyToken;