import dotenv from 'dotenv';

dotenv.config()

// MONGO DB NAME
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/defaultdb";

// EXPRESS BACKEND PORT
export const PORT = process.env.PORT || 4000;

// CLOUDINARY API CREDENTIALS
export const CLD_API_KEY = process.env.CLD_API_KEY;

export const CLD_NAME = process.env.CLD_API_KEY;

export const CLD_PASSWORD = process.env.CLD_API_KEY;