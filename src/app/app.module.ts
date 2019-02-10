import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';


import { AppComponent } from './app.component';

import { TransactionsComponent } from './transactions/transactions.component';
import { HttpErrorInterceptor } from './infrastructure/http-error.interceptor';
import { AccountsComponent } from './accounts/accounts.component';
import { RegisterAccountComponent } from './register-account/register-account.component';


@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    AccountsComponent,
    RegisterAccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers:
  [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
