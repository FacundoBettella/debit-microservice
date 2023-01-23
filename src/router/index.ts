import express, { Express } from 'express';
import { debitRouter } from './debit.router';

export const API_ROUTER = (app: Express) => {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/debit', debitRouter);
};
