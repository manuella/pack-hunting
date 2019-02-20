import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { AuthSessionService } from '../services/auth-session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    accountId:['', Validators.required]
  });




  onSubmit() {
  // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value.accountId);
    this.auth.assignSession(this.loginForm.value.accountId);
  //  accountService.
  }

  constructor(private fb: FormBuilder,  private accountService : AccountService,
              private auth : AuthSessionService)
  { }

  ngOnInit() {
  }

}
