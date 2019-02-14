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
import { SellToBrokerComponent } from './sell-to-broker/sell-to-broker.component';
import { AcceptOfferComponent } from './accept-offer/accept-offer.component';


@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    TransactionsComponent,
    AccountsComponent,
    RegisterAccountComponent,
    SellToBrokerComponent,
    AcceptOfferComponent
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
