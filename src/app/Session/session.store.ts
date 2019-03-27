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

@StoreConfig({ name: "session" })
export class SessionStore extends Store<SessionState>
{
  constructor() {
    super(createInitialSessionState());
  }

  login(session: SessionState)
  {
    this.update(session);
    console.warn("logging in, " + session.idKey);
    localStorage.setItem(session.token, session.idKey);
  }

  logout()
  {
    localStorage.clear();
    this.update(createInitialSessionState());
  }
}
