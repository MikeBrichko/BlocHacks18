import { Component, OnInit } from '@angular/core';
import {RequestModel} from '../shared/request.model';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: RequestModel[] = [
    {'userID': 'Thomas', 
    'title': 'Title', 
    'description': 'Description', 
    'category': 'money', 
    'quantity': 100, 
    'location': 'Montreal'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
