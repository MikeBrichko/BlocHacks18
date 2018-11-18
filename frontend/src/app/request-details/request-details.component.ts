import { Component, OnInit } from '@angular/core';
import { RequestgetterService } from '../requestgetter.service';

import { ActivatedRoute } from '@angular/router';

import { RequestModel } from '../shared/request.model';

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.css']
})
export class RequestDetailsComponent implements OnInit {

  requestId : Number;
  userId: Number;
  requestList : RequestModel[];

  constructor(private requestgetterService: RequestgetterService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.requestId = +this.activatedRoute.snapshot.paramMap.get('requestid');
    this.userId = +this.activatedRoute.snapshot.paramMap.get('userid');
    console.log(this.requestId);
  }

  getRequests() {
    this.requestgetterService.getRequests()
      .subscribe((data: RequestModel[]) => {
        this.requestList = data;
        console.log(this.requestList);
      });
    
  }

  


}
