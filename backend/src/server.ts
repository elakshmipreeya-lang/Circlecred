import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/healthRoutes';
import userRoutes from './routes/userRoutes';
import scoreRoutes from './routes/scoreRoutes';
import transactionRoutes from './routes/transactionRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/health', healthRoutes);
app.use('/api/users', userRoutes);
app.use('/api/score', scoreRoutes);
app.use('/api/transactions', transactionRoutes);

app.listen(PORT, () => {
  console.log(`[CircleCred API] Server running on port ${PORT}`);
  console.log(`[CircleCred API] Health endpoint: http://localhost:${PORT}/api/health`);
  console.log(`[CircleCred API] Users endpoint: http://localhost:${PORT}/api/users`);
  console.log(`[CircleCred API] Score endpoint: http://localhost:${PORT}/api/score/calculate`);
  console.log(`[CircleCred API] Transactions endpoint: http://localhost:${PORT}/api/transactions`);
});