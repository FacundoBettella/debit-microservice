import { NextFunction, Request, Response } from 'express';
import { IDebitResponse, IDebitService } from '../interfaces';
import { BaseController } from './base.controller';
import HttpStatusCode from '../utils/HttpStatusCode';

export class DebitController extends BaseController {

  private debitService: IDebitService;

  constructor(service: IDebitService) {
    super();
    this.debitService = service;
  }

  async findDebitsByUserId(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.params;

    try {
      const userDebits = await this.debitService.findDebitsByUserId(
        Number(userId)
      );

      this.response<IDebitResponse | IDebitResponse[]>({
        res,
        status: HttpStatusCode.OK,
        data: userDebits,
      });
    } catch (err) {
      next(err);
    }
  }

  async findDebitById(req: Request, res: Response, next: NextFunction) {
    const { userId, debitId } = req.params;

    try {
      const debit = await this.debitService.findDebitById(Number(userId), Number(debitId));

      this.response<IDebitResponse>({
        res,
        status: HttpStatusCode.OK,
        data: debit,
      });

    } catch (err) {
      next(err);
    }
  }


  async createDebit(req: Request, res: Response, next: NextFunction) {
    const { user, debit } = req.body;

    try {
      const newDebit = await this.debitService.create(user, debit);

      this.response<IDebitResponse>({
        res,
        status: HttpStatusCode.OK,
        data: newDebit,
      });

    } catch (err) {
      next(err);
    }
  }
}
