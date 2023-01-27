import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { API_ROUTER } from './router';

import { corsOptions } from './config/cors';
// import databaseInit from './database/database';

const PORT = process.env['PORT']!;
const app = express();

/* Para endpoints-logs */
app.use(morgan('combined'));

app.use(express.json());

// databaseInit();

API_ROUTER(app);

/* Middlewares */
app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
