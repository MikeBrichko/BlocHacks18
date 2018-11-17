import { Component, OnInit } from '@angular/core';
import {RequestModel} from '../shared/request.model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: RequestModel[] = [new RequestModel('Thomas', 'fsdfsdfd', 'sdfdsfsdf')];
  constructor() { }

  ngOnInit() {
  }

}
