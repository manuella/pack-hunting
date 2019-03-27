import { SessionStore } from '../Session/session.store';
import { timer, pipe} from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

export class MockServerAuth {
  login(name : string, key : number) {
    // mock service
    return timer(300).pipe(mapTo({ token: name, idKey: key }));
  }
}

export class SessionService {

   constructor(private sessionStore: SessionStore,
	       private serverAuth: MockServerAuth) { }

   login(creds) {
      return this.serverAuth.login(creds).pipe(
	tap(session => this.sessionStore.login(session))
      );
   }

   logout() {
      this.sessionStore.logout();
   }
}