import { Component, OnInit } from '@angular/core';
import { RequestgetterService } from '../requestgetter.service';

import { RequestModel } from '../shared/request.model';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {

  requestList : RequestModel[];

  constructor(private requestgetterService: RequestgetterService) { }

  ngOnInit() {
  }

  getRequests() {
    this.requestgetterService.getRequests()
      .subscribe((data: RequestModel[]) => {
        this.requestList = data;
        console.log(this.requestList);
      });
    
  }


}
