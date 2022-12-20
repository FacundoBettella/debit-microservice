import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { API_ROUTER } from './routes';

import { corsOptions } from './config/cors';

const PORT = process.env['PORT'] || 3001;
const app = express();

/* Para endpoints-logs */
app.use(morgan('combined'));

app.use(express.json());

API_ROUTER(app);

/* Middlewares */
app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
