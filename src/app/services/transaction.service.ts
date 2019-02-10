import { Injectable } from '@angular/core';
import { Transaction } from '../models/transaction';
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
    return this.httpService.get<Transaction[]>("http://localhost:8081/transactions/");
  }
}
