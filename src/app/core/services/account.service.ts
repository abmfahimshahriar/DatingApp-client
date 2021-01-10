import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {User} from "../../models/user";
import {ReplaySubject} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  constructor(
    private http: HttpClient
  ) { }


  login(payload:any) {
    return this.http.post(`${this.baseUrl}account/login`,payload).pipe(
      map((response: User) => {
        const user = response;
        if(user) {
          this.setCurrentUser(user);
        }
        return user;
      })
    )
  }

  register(payload:any) {
    return this.http.post(`${this.baseUrl}account/register`,payload).pipe(
      map((response: User) => {
        const user = response;
        if(user) {
          this.setCurrentUser(user);
        }
        return user;
      })
    )
  }

  setCurrentUser(user: User) {
    if(user) {
      user.roles = [];
      const roles = this.getDecodedToken(user.token).role;
      Array.isArray(roles) ? user.roles = roles : user.roles.push(roles);
    }

    localStorage.setItem('user',JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  logout() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  getDecodedToken(token: string) {
    return JSON.parse(atob(token.split('.')[1]));
  }

}
