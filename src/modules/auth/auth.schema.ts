import { z } from 'zod';

export const userRegisterSchema = z.object({
    email: z.email(),
    name: z.string().min(2, 'Name must be at least 2 characters long'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
})