import express from 'express';
import { authenticateUser } from '../authMiddleware';

const authRouter = express.Router();

authRouter.post('/login', authenticateUser);

export default authRouter;