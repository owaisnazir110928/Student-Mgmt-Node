import { Request, Response } from 'express';
import TaskModel from '../models/taskModel';


const StudentController = {
    async viewTasks(req: Request, res: Response) {
        const studentEmail = req.body.bearerEmail;

        try {
            const tasks = await TaskModel.find({ student: studentEmail });
            res.json(tasks);
        } catch (error) {
            console.log(error);

            res.status(500).json({ message: 'Internal server error' });
        }
    },

    async completeTask(req: Request, res: Response) {
        const taskId = req.params.taskId;

        try {
            // Update task status to completed
            const updatedTask = await TaskModel.findByIdAndUpdate(
                taskId,
                { status: 'completed' },
                { new: true }
            );

            if (!updatedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }

            res.json({ message: 'Task marked as completed' });
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    },
};

export default StudentController;
