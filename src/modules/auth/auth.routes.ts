import express from 'express';
import { userRegisterController } from './auth.controller';
import { validate } from '../../shared/middleware/validate.middleware';
import { userRegisterSchema } from './auth.schema';

const router = express.Router();

router.post('/register', validate(userRegisterSchema), userRegisterController);

export default router;
