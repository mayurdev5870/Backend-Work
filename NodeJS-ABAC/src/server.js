import express from 'express';
import { PORT } from './config/env.js';
import projectRoute from './routes/projectRoute.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

// Middleware
app.use(express.json());

//routes
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the ABAC NodeJS Application</h1>');
});

app.use('/api/projects', projectRoute);

app.use(errorHandler);

//Error handling

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});