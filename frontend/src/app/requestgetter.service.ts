import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RequestModel } from './shared/request.model';

@Injectable({
  providedIn: 'root'
})

export class RequestgetterService {

  constructor(private http : HttpClient) { }

  getRequests(){
    return this.http.get('https://blochacks2018.herokuapp.com/requests');
  }

  getRequestById(requestId){
    return this.http.get('https://blochacks2018.herokuapp.com/request/'+requestId);
  }
}
