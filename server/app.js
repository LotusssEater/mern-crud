import express from "express";
import fileUpload from "express-fileupload";
import postsRoutes from './routes/posts.routes.js';

// EXPRESS 
const app = express();

// MIDDLEWARE:
app.use(express.json())
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './tempUpload'
}))

// ROUTES
app.use(postsRoutes);

export default app;