import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { SessionStore } from '../session/session.store';
import { timer, pipe} from 'rxjs';
import { mapTo, tap } from 'rxjs/operators';

export class MockServerAuth {
  login(creds) {
    // mock service
    return
  }
}

@Injectable({
  providedIn: 'root'
})

export class SessionService {
   constructor(private session: SessionStore)
   {
      console.log("Initiated SessionService")
    }

   login(creds) {
     console.log("Service call w/ creds: " + creds.email +" " +creds.password);
     // call service here with credentials

     // get token, store locally
      return timer(300).pipe(mapTo({ token: 'janeToken', idKey: '44' })).pipe(
	       tap(session => this.session.login(session))
      );
   }

   logout() {
      this.session.logout();
   }
}
