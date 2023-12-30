import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Access denied. Token is missing.' });
    }
    try {
        const decoded = jwt.verify(token.split(' ')[1], config.jwtSecret);
        req.body.bearerEmail = (decoded as { email: string }).email; // Attach decoded email to the request
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token.' });
    }
}
