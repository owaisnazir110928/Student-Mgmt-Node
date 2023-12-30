import express, { Request, Response } from 'express';
import { verifyToken } from '../middleware/authMiddleware';
import AdminController from '../controllers/adminController';

const router = express.Router();

// Middleware to verify admin token
router.use(verifyToken);


// Endpoint to add a new student
router.post('/addStudent', AdminController.addStudent);

// Endpoint to assign a task to a student
router.post('/assignTask', AdminController.assignTask);

export default router;
