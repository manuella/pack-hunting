import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';

@Injectable({
  providedIn: 'root'
})
export class SessionQuery extends Query<SessionState> {

   isLoggedIn$ = this.select(state => toBoolean(state.token));
   name$ = this.select(state => state.idKey);

   constructor(protected store: SessionStore) {
     super(store);
     console.log("initiating SessionQuery");
   }

   isLoggedIn() {
     console.log("checking login: " + this.getSnapshot().token);
     return toBoolean(this.getSnapshot().token);
   }
}
