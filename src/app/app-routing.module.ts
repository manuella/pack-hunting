import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TransactionsComponent } from './transactions/transactions.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { SellToBrokerComponent } from './sell-to-broker/sell-to-broker.component';
import { AcceptOfferComponent } from './accept-offer/accept-offer.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'register-account', component: RegisterAccountComponent },
  { path: 'sell-question', component: SellToBrokerComponent},
  { path: 'accept-offer', component: AcceptOfferComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
