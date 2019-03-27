import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsComponent } from './transactions/transactions.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/accounts', pathMatch: 'full' },
//  { path: 'transactions', component: TransactionsComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'register-account', component: RegisterAccountComponent },
  //{ path: 'sell-question', component: SellToBrokerComponent},
  //{ path: 'accept-offer', component: AcceptOfferComponent},
  { path: 'account-detail', component: AccountDetailComponent },
  { path: 'account-details/:id', component: AccountDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
