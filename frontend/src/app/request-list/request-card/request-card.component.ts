import {Component, Input, OnInit} from '@angular/core';
import {RequestModel} from '../../shared/request.model';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.css']
})
export class RequestCardComponent implements OnInit {
  @Input() request: RequestModel;
  constructor() { }

  ngOnInit() {
  }

}
