import express from 'express';
import taskRoutes from './src/interfaces/api/routes';

const app = express();
app.use(express.json());

app.use('/api', taskRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});