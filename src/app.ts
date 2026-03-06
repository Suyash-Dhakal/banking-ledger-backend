import express from 'express';
import authRoutes from './modules/auth/auth.routes';
import { globalErrorHandler } from './shared/middleware/globalError.middleware';

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.use(globalErrorHandler);

export default app;