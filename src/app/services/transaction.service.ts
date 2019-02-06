import { Injectable } from '@angular/core';
import { Transaction } from '../classes/transaction';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private httpService : HttpClient) { }

  transactions: Transaction[];

  public getTransactions()
  {
    return this.httpService.get<Transaction[]>("http://www.mocky.io/v2/5c3ffb7d3500006d2eec3ab1");
  }
}
