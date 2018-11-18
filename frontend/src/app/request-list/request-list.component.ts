import { Component, OnInit } from '@angular/core';
import {RequestModel} from '../shared/request.model';
import { UserModel } from '../shared/user.model';

import { RequestgetterService } from '../requestgetter.service';
import { UsergetterService } from '../usergetter.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requestList: RequestModel[];
  userList: UserModel[];

  constructor(private requestgetterService: RequestgetterService, private usergetterService: UsergetterService) { }

  ngOnInit() {
    this.getUsers();
    this.getRequests();
  }

  getRequests() {
    this.requestgetterService.getRequests()
      .subscribe((data: RequestModel[]) => {
        this.requestList = data;
        console.log(this.requestList);
      });
    
  }

  getUsers() {
    this.usergetterService.getUsers()
      .subscribe((data: UserModel[]) => {
        this.userList = data;
        console.log(this.userList);
      });
    
  }

  findUserById(userId){
    return this.userList.find(obj => {
      return obj.userId === userId;
    })
  }

}
