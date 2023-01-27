import express, { NextFunction, Request, Response } from 'express';

import { DebitController } from '../controller/index';
import { DebitService } from '../service/debit.service';

export const debitRouter = express.Router();

const service = new DebitService();
const controller = new DebitController(service);

debitRouter.get(
  '/get-all',
  /* ValidatorMiddleware(),*/
  (req: Request, res: Response, next: NextFunction) => {
    controller.findDebitsByUserId(req, res, next);
  }
);

debitRouter.get(
  '/get-debit',
  /* ValidatorMiddleware(),*/
  (req: Request, res: Response, next: NextFunction) => {
    controller.findDebitById(req, res, next);
  }
);

