import {
  IDebitRequest,
  IDebitResponse,
  IDebitService,
  IUser,
} from '../interfaces';

export class DebitService implements IDebitService {

  async findDebitsByUserId(userId: number): Promise<Array<IDebitResponse>> | Promise<Array<IDebitResponse>> {

    /* Logica para la consistencia de datos en Firebase | postgres

      const debit = await this.repository.findDebitsByUserId(id);
      return debit;
    */

    const debits = [
      {
        id: 1,
        service: 'Mercado Pago',
        description: 'description',
        amount: 12000,
        status: true,
        userId: userId,
        userEmail: 'useremail@gmail.com',
      },
      {
        id: 2,
        service: 'Mercado libre',
        description: 'description',
        amount: 12000,
        status: true,
        userId: userId,
        userEmail: 'useremail@gmail.com',
      },
    ];

    return debits;
  }

  async findDebitById(userId: number, debitId: number): Promise<IDebitResponse> {

    /*
      Logica para la consistencia de datos en Firebase | postgres

      const debit = await this.repository.findDebitByIds(id);
     */

    const debit = {
      id: debitId,
      service: 'Mercado libre',
      description: 'description',
      amount: 12000,
      status: true,
      userId: userId,
      userEmail: 'useremail@gmail.com',
    };

    return debit;
  }

  async create(user: IUser, _newDebit: IDebitRequest): Promise<IDebitResponse> {

      /*
        Logica para la consistencia de datos en Firebase | postgres

        const debit = await this.repository.createDebit(user, newDebit);
     */

    const debit = {
      id: 3,
      service: 'Mercado libre',
      description: 'description',
      amount: 12000,
      status: true,
      userId: user.id,
      userEmail: 'useremail@gmail.com',
    };


    return debit;
  }
}
