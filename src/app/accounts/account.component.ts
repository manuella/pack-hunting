import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy
 } from '@angular/core';
import { AccountService } from '../services/account.service';
import { Account } from '../models/account';

@Component({
  selector: 'app-account',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: `./account.component.html`
})


export class AccountComponent {
  @Input() account: Account;
  @Output() add = new EventEmitter<Account>();
  @Output() remove = new EventEmitter<Account>();

}
