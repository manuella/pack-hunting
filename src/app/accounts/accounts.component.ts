import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Account } from '../models/account';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private accountService : AccountService) { }

  accounts:Account[];

  ngOnInit() {
    this.accountService.getAccounts().subscribe(
  (data: Account[]) => this.accounts = data);
  }
}
