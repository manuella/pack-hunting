import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private httpService : HttpClient) { }

  accounts: Account[];

  public getAccounts()
  {
    return this.httpService.get<Account[]>("http://localhost:8080/accounts/");
  }
}
