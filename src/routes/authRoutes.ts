import express, { Request, Response } from 'express';
import AuthController from '../controllers/authController';

const router = express.Router();

// Endpoint for admin login
router.post('/adminLogin', AuthController.adminLogin);

// Endpoint for student login
router.post('/studentLogin', AuthController.studentLogin);

export default router;
