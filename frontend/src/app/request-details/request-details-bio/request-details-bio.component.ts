import { Component, Input, OnInit } from '@angular/core';
import { UserModel } from '../../shared/user.model';

import { UsergetterService } from '../../usergetter.service';

@Component({
  selector: 'app-request-details-bio',
  templateUrl: './request-details-bio.component.html',
  styleUrls: ['./request-details-bio.component.css']
})
export class RequestDetailsBioComponent implements OnInit {

  @Input() userid: Number;

  user : UserModel;


  constructor(private usergetterService: UsergetterService) { }

  ngOnInit() {
    this.getUserById(this.userid);
  }

  getUserById(userId) {
    this.usergetterService.getUserById(userId)
      .subscribe((data: UserModel) => 
      {
        this.user = data;
        console.log(this.user);
      });
  }

}
