import { Injectable } from '@angular/core';
import { Account } from '../models/account';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


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

  constructor(private httpService : HttpClient)
  {

  }

  AccountURL =  "http://localhost:8080/accounts/";

  accounts: Account[];
  public getAccounts()
  {
    return this.httpService.get<Account[]>(this.AccountURL);
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
