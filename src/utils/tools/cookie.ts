// import Cookies from 'universal-cookie';

import { Cookies } from 'react-cookie';

export class ClientCookie {
  private cookieStore() {
    return new Cookies();
  }

  public getAll() {
    return this.cookieStore().getAll();
  }

  public get(name: string) {
    return this.cookieStore().get(name);
  }
}
