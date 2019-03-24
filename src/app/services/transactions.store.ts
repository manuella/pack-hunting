import { Transaction } from '../models/transaction';
import { EntityState, EntityStore, StoreConfig  } from '@datorama/akita';
import { Injectable } from '@angular/core';


export interface TransactionsState extends EntityState<Transaction> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'transaction'
})
export class TransactionsStore extends EntityStore<TransactionsState, Transaction> {
  constructor() {
    super();
  }
}
