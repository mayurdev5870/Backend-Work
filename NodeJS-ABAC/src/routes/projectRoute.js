import express from 'express';
import VerifyToken from '../middleware/authentication';

const router = express.Router();

// Route to view project
router.get('/:id', VerifyToken, ViewProject);

// Route to update project
router.put('/:id', VerifyToken, UpdateProject);

export default router;