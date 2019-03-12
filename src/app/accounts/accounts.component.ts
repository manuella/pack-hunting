import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { startWith, switchMap } from 'rxjs/operators';
import { AccountService } from '../services/account.service';
import { Account } from '../models/account';
import { AccountComponent } from './account.component';
import { FormsModule,FormControl } from '@angular/forms';
import { AccountsQuery } from '../services/account.query';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent implements OnInit
{
  accounts$: Observable<Account[]>;
  loading$: Observable<boolean>;
  search = new FormControl();

  constructor(private accountsService: AccountService,
              private accountsQuery : AccountsQuery )
  {}

  ngOnInit() {

    console.log("nginit accounts");
    this.accountsService.get().subscribe();

    this.loading$ = this.accountsQuery.selectLoading();

    console.log("Loading: " + this.loading$);
    console.log("accounts:" + this.accounts$);

    this.accounts$ = this.search.valueChanges.pipe(
      switchMap(value => this.accountsQuery.selectAll(
       {
         filterBy: entity => entity.userName.toLowerCase().includes(value)
      }
    ))
    );

    this.accounts$.forEach(function (value2)
     {
        console.log("result: " + value2 )
      });


    console.log(this.accounts$);
  }
}




//export class AccountsComponent implements OnInit {

  //constructor(private accountService : AccountService) { }

  //accounts:Account[];

  //ngOnInit() {
  //  this.accountService.getAccounts().subscribe(
  //(data: Account[]) => this.accounts = data);
//  }
//}
