import dotenv from 'dotenv';

dotenv.config();

export const config = {
  jwtSecret: process.env.JWT_SECRET || " ",
  mongoURI: process.env.MONGO_URI || " ",
};
