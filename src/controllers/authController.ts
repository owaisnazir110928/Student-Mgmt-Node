import { Request, Response } from 'express';
import AdminModel from '../models/adminModel';
import StudentModel from '../models/studentModel';
import jwt from 'jsonwebtoken';
import { config } from '../config/config';

const AuthController = {
    async adminLogin(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            // Check if the admin credentials are valid
            const admin = await AdminModel.findOne({ email, password });

            if (!admin) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Generate JWT token for admin
            const token = jwt.sign({ email: admin.email }, config.jwtSecret, { expiresIn: '1h' });

            res.json({ token });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async studentLogin(req: Request, res: Response) {
        const { email, password } = req.body;

        try {
            // Check if the student credentials are valid
            const student = await StudentModel.findOne({ email, password });

            if (!student) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            // Generate JWT token for student
            const token = jwt.sign({ email: student.email }, config.jwtSecret, { expiresIn: '1h' });

            res.json({ token });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },
};

export default AuthController;
