import express, { Request, Response } from 'express';
import { verifyToken } from '../middleware/authMiddleware';
import StudentController from '../controllers/studentController';

const router = express.Router();

// Middleware to verify student token
router.use(verifyToken);

// Endpoint to view assigned tasks
router.get('/tasks', StudentController.viewTasks);

// Endpoint to change task status to completed
router.put('/completeTask/:taskId', StudentController.completeTask);

export default router;
