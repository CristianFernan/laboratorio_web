import express from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

//Puerto
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Middleware de manejo de errores
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

export default app;
