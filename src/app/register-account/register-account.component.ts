import { Component, OnInit } from '@angular/core';
import { Account } from '../models/account';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {

  constructor(private accountService : AccountService) { }

  userName: string;
  model: Account;
  submitted = "false";

  onSubmit()
  {
    this.accountService.createUser(this.userName)
      .subscribe(model => this.model = model)
    this.submitted = "true";
  }

  ngOnInit() {
  }

}
