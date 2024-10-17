import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // This will load the variables from the .env file

export const ConnectDB = async () => {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected");
};
