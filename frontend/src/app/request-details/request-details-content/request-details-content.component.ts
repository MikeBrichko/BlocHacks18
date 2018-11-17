import { Component, OnInit } from '@angular/core';
import { RequestModel } from '../../shared/request.model';

@Component({
  selector: 'app-request-details-content',
  templateUrl: './request-details-content.component.html',
  styleUrls: ['./request-details-content.component.css']
})
export class RequestDetailsContentComponent implements OnInit {

  request : RequestModel = new RequestModel("mike", "HELP ME", "descritpion here", "food", 20, "queencity");

  constructor() { }

  ngOnInit() {
  }

}
