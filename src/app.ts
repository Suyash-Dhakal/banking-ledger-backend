import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './modules/auth/auth.routes.js';
import { globalErrorHandler } from './shared/middleware/globalError.middleware.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.use(globalErrorHandler);

export default app;