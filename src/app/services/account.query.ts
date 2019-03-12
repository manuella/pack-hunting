import { Account } from'../models/account';
import { AccountsStore, AccountsState } from './accounts.store';
import { QueryEntity } from '@datorama/akita';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class AccountsQuery extends QueryEntity<AccountsState, Account>
{
  constructor(protected store: AccountsStore)
  {
    super(store);
  }
}
