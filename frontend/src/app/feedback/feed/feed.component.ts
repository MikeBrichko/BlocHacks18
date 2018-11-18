import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../shared/post.model";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  postList: PostModel[]  = [
    { 'imageUrl': '',
      'description': 'Gimme suk brotha',
      'id': 69,
      userId: 13},
    { 'imageUrl': '',
      'description': 'Gimme suk brotha',
      'id': 69,
      userId: 13},
    { 'imageUrl': '',
      'description': 'Gimme suk brotha',
      'id': 69,
      userId: 13},
    { 'imageUrl': '',
      'description': 'Gimme suk brotha',
      'id': 69,
      userId: 13}
  ];

  constructor() { }

  ngOnInit() {
  }

}
