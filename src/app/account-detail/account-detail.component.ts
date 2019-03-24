import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,  ParamMap ,Router } from '@angular/router';
import { FormsModule,FormControl } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

import { Account } from '../models/account';
import { TransactionService } from '../services/transaction.service';
import { TransactionQuery } from '../services/transaction.query';
import { TransactionsState } from '../services/transactions.store';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction'
import { AccountsQuery } from '../services/account.query';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  sub;
  id: number;
  accountId: number;
  account: Account;
  transactionsDebitor$: Observable<Transaction[]>;
  transactionsCreditor$ : Observable<Transaction[]>;
  loading$: Observable<boolean>;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private transactionsQuery : TransactionQuery,
              private transactionService : TransactionService,
              private accountsQuery : AccountsQuery
 ) {}

  ngOnInit() {

    // load accounts based on passed argument
    this.sub = this.route.params.subscribe(params => { this.id = params['id']; });


    this.transactionService.get().subscribe();
    this.loading$ = this.transactionsQuery.selectLoading();

    console.log("ID : " + this.id);
    this.account = this.accountsQuery.getEntity(1);//.subscribe(val => this.account = val);
    console.log("account:" + this.account + " type " + typeof(this.account));

    //this.accountId = this.account.accountId;

    this.transactionsDebitor$ = this.transactionsQuery.selectAll(
      {
        filterBy: entity => entity.debitorId == this.id
      }
    );

    this.transactionsCreditor$ = this.transactionsQuery.selectAll(
      {
        filterBy: entity => entity.creditorId === this.id
      }
    );

    console.log(this.transactionsCreditor$);
    console.log(this.transactionsDebitor$);

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
