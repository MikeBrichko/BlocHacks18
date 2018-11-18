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

  selectedCategory: string;
  userList: UserModel[];

  constructor(private requestgetterService: RequestgetterService, private usergetterService: UsergetterService) { }

  ngOnInit() {
    this.getUsers();
    this.getRequests();
  }

  radioCategoryHandler(event: any) {
    this.selectedCategory = event.target.value;
    console.log(this.selectedCategory);
  }

  getRequests() {
    this.requestgetterService.getRequests()
      .subscribe((data: RequestModel[]) => {
        this.requestList = data;
      });
  }

  radioCostHandler(event: any) {
    if (event.target.value === 'increasing') {
      this.requestList.sort((a, b) => a.quantity > b.quantity ? -1 : a.quantity > b.quantity ? 1 : 0);
      console.log(this.requestList);
    } else {
      this.requestList.sort((a, b) => a.quantity < b.quantity ? -1 : a.quantity > b.quantity ? 1 : 0);
      console.log(this.requestList);
    }
  }
  getUsers() {
    this.usergetterService.getUsers()
      .subscribe((data: UserModel[]) => {
        this.userList = data;
      });
  }

  findUserById(userId) {
    return this.userList.find(obj => {
      return obj.userId === userId;
    });
  }
}
