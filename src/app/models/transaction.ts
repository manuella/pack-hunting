import { ID } from '@datorama/akita';
export class Transaction
{
  id: ID;
  transactionId:number;
  debitorId : number;
  creditorId : number;
  amount: number;
}
