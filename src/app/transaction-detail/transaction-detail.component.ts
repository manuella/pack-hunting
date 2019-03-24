import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy
 } from '@angular/core';
import { Transaction } from '../models/Transaction';

@Component({
  selector: 'app-transaction-detail',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent  {
  @Input() transaction: Transaction;
  @Output() add = new EventEmitter<Transaction>();
  @Output() remove = new EventEmitter<Transaction>();

}
