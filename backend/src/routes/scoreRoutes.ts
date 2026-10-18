import { Router } from 'express';
import { getScore } from '../controllers/scoreController';

const router = Router();

router.post('/calculate', getScore);

export default router;