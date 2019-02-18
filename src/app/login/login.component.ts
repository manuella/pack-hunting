import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm = this.fb.group({
    accountId:['', Validators.required]
  });




//  onSubmit() {
  // TODO: Use EventEmitter with form value
//  console.warn(this.loginForm);
//}

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
