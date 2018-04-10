import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Users } from './users';
import {$} from '../../node_modules/jquery';
import {ajax} from '../../node_modules/jquery';

@Injectable()
export class EventService {

  httpClient: any;
 
  constructor( private http: HttpClient) { }

 serviceEndpoint = 'http://localhost:8080/users';

 getUsers(): Observable<Users[]> {
   return this.http.get<Users[]>(this.serviceEndpoint);
 }

 deleteUser(user: Users): Observable<Users> {
   return this.http.put<Users>(this.serviceEndpoint + '/' + user.id, user);
 }


 editUsers(user: Users): Observable<Users> {
   return this.http.put<Users>(this.serviceEndpoint + '/' + user.id, user);
 }

  private _headers = new HttpHeaders().set('Content-Type', 'application/json');

 addUser(user: Users) {
  console.log(user)
  console.log(user)
  let users = {
    
    username: user.username,
    email: user.email,
    
  }
  const headers = this._headers;
  let user1 = JSON.stringify(users);
 
  return this.http.post(this.serviceEndpoint, user1,{ headers : headers } )
 
 }
 
 
 
}