import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private transactionService : TransactionService) { }

  transactions : Transaction[];

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(
  (data: Transaction[]) => this.transactions = data);
  }

}
