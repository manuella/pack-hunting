import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';
import { AppComponent } from './app.component';

import { TransactionsComponent } from './transactions/transactions.component';
import { HttpErrorInterceptor } from './infrastructure/http-error.interceptor';
import { AccountsComponent } from './accounts/accounts.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { SellToBrokerComponent } from './sell-to-broker/sell-to-broker.component';
import { AcceptOfferComponent } from './accept-offer/accept-offer.component';
import { AccountComponent } from './accounts/account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    TransactionsComponent,
    AccountsComponent,
    RegisterAccountComponent,
    SellToBrokerComponent,
    AcceptOfferComponent,
    AccountComponent,
    AccountDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
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
