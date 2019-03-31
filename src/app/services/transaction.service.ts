import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { noop } from '@datorama/akita';

import { Transaction } from '../models/transaction';
import { TransactionsStore } from '../services/transactions.store';
import { TransactionQuery } from '../services/transaction.query';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8',
    // authtoken goes here
  })
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpService : HttpClient,
              private transactionStore: TransactionsStore,
              private transactionQuery: TransactionQuery) { }

  transactions: Transaction[];
  TransactionURL = "http://www.mocky.io/v2/5c8eae46300000c8241b0fe0";

  public get()
  {
    const request = this.httpService.get(this.TransactionURL).pipe(
      tap(response => this.transactionStore.set(response))
    );
    return this.transactionQuery.isPristine ? request : noop();
  }
}
