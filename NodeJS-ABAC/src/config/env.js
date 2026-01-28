import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 7002;
export const jwtSecret = process.env.JWT_SECRET || 'default-secret-key';