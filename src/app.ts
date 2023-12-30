import express from 'express';
import bodyParser from 'body-parser';
import adminRoutes from './routes/adminRoutes';
import studentRoutes from './routes/studentsRoutes';
import authRoutes from './routes/authRoutes';
import mongoose from 'mongoose';
import { config } from './config/config';

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB using Mongoose
mongoose.connect(config.mongoURI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error', err);
    });

// Routes
app.use('/admin', adminRoutes);
app.use('/student', studentRoutes);
app.use('/auth', authRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
