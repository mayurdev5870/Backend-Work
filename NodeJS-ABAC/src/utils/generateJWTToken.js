import jwt from 'jsonwebtoken';
import { jwtSecret } from '../config/env.js';

const user = {
    id: '12345',
    name: 'John Doe',
    role: 'admin',
    department: 'IT',
    accessLevel: 5
}

const generateJWTToken = () => {
    const token = jwt.sign(user, jwtSecret, { expiresIn: '1h' });
    return token;
}
export default generateJWTToken;