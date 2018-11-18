import { Component, OnInit } from '@angular/core';
import {RequestModel} from '../shared/request.model';

import { RequestgetterService } from '../requestgetter.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requestList: RequestModel[];
  constructor(private requestgetterService: RequestgetterService) { }

  ngOnInit() {
    this.getRequests();
  }

  getRequests() {
    this.requestgetterService.getRequests()
      .subscribe((data: RequestModel[]) => {
        this.requestList = data;
        console.log(this.requestList);
      });
  }

  radioCategoryHandler(event: any) {
    this.getRequests();
    let num;
    let list: RequestModel[] = [];
    for (num = 0; num < this.requestList.length; num++) {
      if (this.requestList[num].category === event.target.value) {
        list.push(this.requestList[num]);
      }
    }

    this.requestList = list;
  }

  radioCostHandler(event: any) {
    if (event.target.value === 'increasing') {
      this.requestList.sort();
    } else {

    }this.requestList.sort();
  }
}
