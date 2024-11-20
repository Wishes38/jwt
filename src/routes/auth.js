import express from 'express';
import { registerUser, loginUser, refreshToken, logoutUser } from '../controllers/authController.js';
import { customLoginLimiter } from '../utils/rateLimiter.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', customLoginLimiter, loginUser);
router.post('/refresh-token', refreshToken);
router.post('/logout', logoutUser);

export default router;
