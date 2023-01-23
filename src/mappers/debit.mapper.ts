import { IDebitRequest, IDebitResponse, IUser, Mapper } from '../interfaces';

export class DebitMapper implements Mapper<IDebitRequest, IUser, IDebitResponse> {
  toDebitDTO = (debitInfo: IDebitRequest, userInfo: IUser): IDebitResponse => {
    return {
      id: debitInfo.id,
      service: debitInfo.service,
      description: debitInfo.service,
      amount: debitInfo.amount,
      status: debitInfo.status,

      userId: userInfo.id,
      userEmail: userInfo.email,
    };
  };
}
