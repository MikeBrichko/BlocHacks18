import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/user.model';
import { RequestModel } from '../../shared/request.model';


@Component({
  selector: 'app-request-details-bio',
  templateUrl: './request-details-bio.component.html',
  styleUrls: ['./request-details-bio.component.css']
})
export class RequestDetailsBioComponent implements OnInit {

  user : UserModel = new UserModel("mike","russia", "hey there", "http://www.evokinnovations.com/wp-content/uploads/2016/09/Mike-Headshot-2.jpeg");
  request : RequestModel = new RequestModel("mike", "descritpion here", "food");

  constructor() { }

  ngOnInit() {
  }

}
