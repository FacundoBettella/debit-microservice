import { NextFunction, Request, Response } from 'express';
import { DebitMapper, IDebitService } from '../interfaces';
import { BaseController } from './base.controller';

export class debitController extends BaseController{
  // private service: IDebitService;
  // private mapper: DebitMapper;

  // constructor(service: IDebitService, mapper: DebitMapper) {
  //   super();
  //   this.service = service;
  //   this.mapper = mapper;
  // }

  // static async getAllUserDebits(req: Request, res: Response, next: NextFunction) {
  //   try{
  //     const { userId } = req.params;
  //     const userDebits = await this.service.getAllUserDebits(userId);

  //     this.response<>


  //   }
  // }

  // static async getUserDebit() {}
}
