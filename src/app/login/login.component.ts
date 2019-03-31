import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { SessionQuery } from '../session/session.query';
import { FormsModule,FormControl, FormGroup } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { ShowIfLoggedInDirective } from '../directives/login.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: SessionService,
                          private router: Router,
                        private sessionQ : SessionQuery) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  submit() {
    if (this.loginForm.valid) {
      console.log("submit: " + this.loginForm.value.email + " , " +
                  this.loginForm.value.password);
      this.authService.login(this.loginForm.value).subscribe(() => {
        this.router.navigateByUrl('');
      })
    }
  }
}
