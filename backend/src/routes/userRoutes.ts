import { Router } from 'express';
import { getUsers, getUser, createNewUser } from '../controllers/userController';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createNewUser);

export default router;