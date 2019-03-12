import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';

import { AccountsStore } from './accounts.store';
import { AccountsQuery } from './account.query';

import { noop } from '@datorama/akita';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=UTF-8',
    // authtoken goes here
  })
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpService : HttpClient,
              private accountStore : AccountsStore,
              private productQuery : AccountsQuery)
  {

  }

  AccountURL =  "http://www.mocky.io/v2/5c870f1932000022043bd039";

  accounts: Account[];
  public get()
  {
    const request = this.httpService.get(this.AccountURL).pipe(
      tap(response => this.accountStore.set(response))
    );

    return this.productQuery.isPristine ? request : noop();
  }

  public createUser(userName: string) : Observable<Account>
  {
    var model =
      {
    	"createUser": userName,
    	"updateUser": userName,
    	"userName": userName,
    	"balance": 0,
    	"displayName": userName
    };

  //  console.log(model);
    return this.httpService.post<Account>(this.AccountURL, model, httpOptions);
  }
}
