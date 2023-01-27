import { Router } from 'express';
import { getPosts, updatePost, createPost, deletePost, getPost } from '../controllers/posts.controllers.js';

const router = Router();

router.get('/api/posts', getPosts);
router.post('/api/posts', createPost);
router.put('/api/posts/:id', updatePost);
router.delete('/api/posts/:id', deletePost);
router.get('/api/posts/:id', getPost);

export default router;