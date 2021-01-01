import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Member} from "../../models/Member";

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseUrl = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user'))?.token
    })
  }
  constructor(
    private http: HttpClient,
  ) { }

  getMembers() {
    return this.http.get<Member[]>(this.baseUrl + 'users',this.httpOptions);
  }

  getMember(username) {
    return this.http.get<Member>(this.baseUrl + 'users/' + username,this.httpOptions);
  }
}
