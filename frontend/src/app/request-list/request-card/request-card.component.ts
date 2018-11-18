import {Component, Input, OnInit} from '@angular/core';
import {RequestModel} from '../../shared/request.model';
import { UserModel } from '../../shared/user.model';

@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.css']
})
export class RequestCardComponent implements OnInit {
  @Input() request: RequestModel;
  @Input() user: UserModel;

  @Input() selectedCategory;
  constructor() { }

  ngOnInit() {
    this.selectedCategory = 'All';
  }

}
