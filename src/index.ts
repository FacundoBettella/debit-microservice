import 'dotenv/config';
import express, { Request, Response } from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { API_ROUTER } from './router';
import { corsOptions } from './config/cors';

/* Para utilizar las base de datos */
/* import { db } from './database/database';*/

const PORT = process.env['PORT']!;
const app = express();

// databaseInit();

/* Para endpoints-logs */
app.use(morgan('combined'));

app.use(express.json());

API_ROUTER(app);

app.get('/nueva-ruta', (_req: Request, res: Response) => {
  res.send('Welcome to debit-microservice');
});

app.use(cors(corsOptions));

/* Middlewares */


app.listen(PORT, () => {
  console.log(`Listen on port ${PORT}`);
});
