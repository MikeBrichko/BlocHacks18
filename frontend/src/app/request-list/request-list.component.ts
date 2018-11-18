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
  selectedCategory: string;
  constructor(private requestgetterService: RequestgetterService) { }

  ngOnInit() {
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
        console.log(this.requestList);
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
}
