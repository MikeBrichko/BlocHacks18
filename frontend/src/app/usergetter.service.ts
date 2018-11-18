import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsergetterService {

  constructor(private http : HttpClient) { }

  getUserById(userId){
    return this.http.get('user/'+userId);
  }

  getUsers(){
    return this.http.get('https://blochacks2018.herokuapp.com/users');
  }
}
