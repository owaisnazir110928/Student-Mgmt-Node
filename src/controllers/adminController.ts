import { Request, Response } from 'express';
import AdminModel from '../models/adminModel';
import StudentModel from '../models/studentModel';
import TaskModel from '../models/taskModel';

const AdminController = {

    async addStudent(req: Request, res: Response) {
        const { name, email, department, password } = req.body;

        try {
            // Check if the student already exists
            const existingStudent = await StudentModel.findOne({ email });

            if (existingStudent) {
                return res.status(400).json({ message: 'Student already exists' });
            }

            // Create a new student
            const newStudent = new StudentModel({
                name,
                email,
                department,
                password,
            });

            await newStudent.save();

            res.status(201).json({ message: 'Student added successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async assignTask(req: Request, res: Response) {
        const { studentEmail, taskName, dueTime } = req.body;

        try {
            // Check if the student exists
            const student = await StudentModel.findOne({ email: studentEmail });

            if (!student) {
                return res.status(404).json({ message: 'Student not found' });
            }

            // Create a new task
            const newTask = new TaskModel({
                student: student.email,
                name: taskName,
                dueTime,
                status: 'pending',
            });

            await newTask.save();

            res.status(201).json({ message: 'Task assigned successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },
};

export default AdminController;
