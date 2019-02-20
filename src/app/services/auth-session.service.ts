import { Injectable } from '@angular/core';


const idKey = "accountIdSessionKey";


@Injectable({
  providedIn: 'root'
})
export class AuthSessionService {

  constructor() { }

  public assignSession(accountId : number)
  {
    console.warn("logging in, " + accountId.toString());
    localStorage.setItem(idKey, accountId.toString());
  }

  public getSession()
  {
    return localStorage.getItem(idKey);
  }
}
