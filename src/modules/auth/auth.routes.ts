import express from 'express';
import { userRegisterController, userLoginController } from './auth.controller.js';
import { validate } from '../../shared/middleware/validate.middleware.js';
import { userRegisterSchema, userLoginSchema } from './auth.schema.js';

const router = express.Router();

router.post('/register', validate(userRegisterSchema), userRegisterController);
router.post('/login', validate(userLoginSchema), userLoginController);

export default router;
