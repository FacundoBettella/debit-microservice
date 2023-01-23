import express, { NextFunction, Request, Response } from 'express';
import { debitController } from '../controller/index';

export const debitRouter = express.Router();

debitRouter.get(
  '/get-all',
  /* ValidatorMiddleware(),*/
  (req: Request, res: Response, next: NextFunction) => {
    debitController.getAllUserDebits(req, res, next);
  }
);
