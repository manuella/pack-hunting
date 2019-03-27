import { Injectable } from '@angular/core';
import { Query, toBoolean } from '@datorama/akita';
import { SessionStore, SessionState } from './session.store';


export class SessionQuery extends Query<SessionState> {
   isLoggedIn$ = this.select(state => toBoolean(state.token));
   name$ = this.select(state => state.idKey);

   constructor(protected store: SessionStore) {
     super(store);
   }

   isLoggedIn() {
     return toBoolean(this.getSnapshot().token);
   }
}