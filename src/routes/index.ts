import express, { Express } from 'express';

export const API_ROUTER = (app: Express) => {
  const router = express.Router();

  app.use('/api/v1', router);
  /* router.use('/debit', debitRouter); */
};
