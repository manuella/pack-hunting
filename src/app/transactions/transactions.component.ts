import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { AuthSessionService } from '../services/auth-session.service';
import { Transaction } from '../models/transaction';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private transactionService : TransactionService,
              private auth : AuthSessionService ) { }

  loggedAccount : string;
  transactions : Transaction[];

  ngOnInit() {
    this.loggedAccount = this.auth.getSession()

    this.transactionService.getTransactions().subscribe(
  (data: Transaction[]) => this.transactions = data);


  }

}
