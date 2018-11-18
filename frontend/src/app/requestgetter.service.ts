import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RequestgetterService {

  constructor(private http : HttpClient) { }

  getRequests(){
    return this.http.get('');
  }

  getRequestById(userId){
    return this.http.get(''+userId);
  }
}
