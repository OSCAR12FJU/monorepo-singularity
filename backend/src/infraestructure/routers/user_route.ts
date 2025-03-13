import express from 'express';
import { UserController } from '../controllers/user_controller';

const router = express.Router();

router.post('/register', UserController.register);
router.post('/login', UserController.login);
router.get('/allUsers', UserController.allUsers);

export default router;