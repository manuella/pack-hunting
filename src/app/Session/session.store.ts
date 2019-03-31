import { Injectable } from "@angular/core";
import { Store, StoreConfig } from "@datorama/akita";

export type SessionState =
{
  idKey: string;
  token: string;
}

export function createInitialSessionState(): SessionState
{
  return { token : null, idKey : null }
    //, ...storage.getSession(),
}


@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: "session" })
export class SessionStore extends Store<SessionState>
{
  constructor() {
    super(createInitialSessionState());
    console.log("Session store initiated");
  }

  login(session: SessionState)
  {
    this.update(session);
    console.warn("logging in: " + session.idKey + " , " + session.token);
    localStorage.setItem(session.idKey, session.token );
  }

  logout()
  {
    console.log("logging out");
    localStorage.clear();
    this.update(createInitialSessionState());
  }
}
