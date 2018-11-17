import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../shared/user.model';


@Component({
  selector: 'app-request-details-bio',
  templateUrl: './request-details-bio.component.html',
  styleUrls: ['./request-details-bio.component.css']
})
export class RequestDetailsBioComponent implements OnInit {

  user : UserModel = new UserModel("Mike Brichko","Russia", "Born and raised in Mother Russia where I fought bears and drank a lot of spicy water.", "https://www.edmonton.ca/city_government/documents/Images/ward-11-councillor_800x494_rdax_500x309.jpg");


  constructor() { }

  ngOnInit() {
  }

}
