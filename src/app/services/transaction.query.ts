import { Transaction } from'../models/transaction';
import { TransactionsStore, TransactionsState } from './transactions.store';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TransactionQuery extends QueryEntity<TransactionsState, Transaction>
{
  constructor(protected store: TransactionsStore)
  {
    super(store);
  }
}
