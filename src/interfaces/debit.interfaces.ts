import { IUser } from './user.interface';

export interface IDebitRequest  {
  id: number;
  service: string;
  description: string;
  amount: number;
  status: boolean,
}

export interface IDebitResponse extends IDebitRequest {
  userId: number;
  userEmail: string;
}

export interface IDebitService {
  findDebitsByUserId: (userId: number) => Promise<IDebitResponse[]> | Promise<IDebitResponse>;

  findDebitById: (userId: number, debitId: number) => Promise<IDebitResponse>;

  create: (user: IUser, debit: IDebitRequest) => Promise<IDebitResponse>;
}

