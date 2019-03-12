import { Account } from '../models/account';
import { EntityState, EntityStore, StoreConfig  } from '@datorama/akita';
import { Injectable } from '@angular/core';


export interface AccountsState extends EntityState<Account> {}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'accounts'
})
export class AccountsStore extends EntityStore<AccountsState, Account> {
  constructor() {
    super();
  }
}
