import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute,  ParamMap ,Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Account } from '../models/account';
import { AccountsQuery } from '../services/account.query';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit {

  sub;
  id: number;
  account: Account;

  constructor(private route: ActivatedRoute,
              private accountsQuery : AccountsQuery,
              private router: Router
 ) {}

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => { this.id = params['id']; });
     console.log("ID : " + this.id);
     this.account = this.accountsQuery.getEntity(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
